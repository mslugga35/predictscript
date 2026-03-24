import Anthropic from "@anthropic-ai/sdk";

export interface StrategyConfig {
  name: string;
  description: string;
  platform: "kalshi" | "polymarket" | "both";
  conditions: {
    type: "price" | "probability" | "time" | "indicator";
    field: string;
    operator: "gt" | "lt" | "eq" | "gte" | "lte" | "between";
    value: number | [number, number];
    unit?: string;
  }[];
  action: {
    type: "buy" | "sell";
    amount: number;
    amount_type: "contracts" | "dollars" | "percent_bankroll";
  };
  risk: {
    max_position: number;
    stop_loss?: number;
    take_profit?: number;
    max_daily_trades: number;
  };
  schedule: {
    check_interval_seconds: number;
    active_hours?: { start: string; end: string };
    active_days?: string[];
  };
}

const PARSER_PROMPT = `You are a prediction market strategy parser. Convert natural language trading strategies into structured JSON configs.

The user will describe a prediction market trading strategy in plain English. Parse it into a structured strategy config.

SUPPORTED PLATFORMS:
- Kalshi: event contracts (yes/no), prices 0-99 cents
- Polymarket: event contracts (yes/no), prices 0-$1
- Both: cross-platform strategies

RESPOND IN THIS EXACT JSON FORMAT (no markdown, raw JSON only):
{
  "name": "<short strategy name, snake_case>",
  "description": "<one sentence description>",
  "platform": "kalshi" | "polymarket" | "both",
  "conditions": [
    {
      "type": "price" | "probability" | "time" | "indicator",
      "field": "<what to check, e.g., 'market_price', 'btc_price', 'hours_to_expiry'>",
      "operator": "gt" | "lt" | "eq" | "gte" | "lte" | "between",
      "value": <number or [min, max] for between>,
      "unit": "<optional: 'cents', 'dollars', 'percent', 'hours'>"
    }
  ],
  "action": {
    "type": "buy" | "sell",
    "amount": <number>,
    "amount_type": "contracts" | "dollars" | "percent_bankroll"
  },
  "risk": {
    "max_position": <max dollars in this strategy>,
    "stop_loss": <optional: exit if position loses this %>,
    "take_profit": <optional: exit if position gains this %>,
    "max_daily_trades": <max trades per day>
  },
  "schedule": {
    "check_interval_seconds": <how often to check conditions>,
    "active_hours": {"start": "HH:MM", "end": "HH:MM"} | null,
    "active_days": ["mon","tue","wed","thu","fri","sat","sun"] | null
  }
}

If the user's description is ambiguous, make reasonable defaults:
- Default platform: kalshi
- Default amount: 10 contracts
- Default max_position: $100
- Default check_interval: 60 seconds
- Default max_daily_trades: 5
- Default stop_loss: 30%
- Default take_profit: 50%`;

// Module-scoped client — reused across requests (one per cold start)
const anthropic = new Anthropic();

/**
 * Validates that the parsed config matches the StrategyConfig type.
 * Throws if required fields are missing or invalid.
 */
function validateStrategyConfig(config: unknown): asserts config is StrategyConfig {
  if (!config || typeof config !== "object") {
    throw new Error("Config must be an object");
  }

  const obj = config as Record<string, unknown>;

  // Required string fields
  if (typeof obj.name !== "string" || !obj.name) {
    throw new Error("Config missing required 'name' string");
  }
  if (typeof obj.description !== "string" || !obj.description) {
    throw new Error("Config missing required 'description' string");
  }

  // Platform validation
  if (!["kalshi", "polymarket", "both"].includes(obj.platform as string)) {
    throw new Error("Invalid platform: must be 'kalshi', 'polymarket', or 'both'");
  }

  // Conditions array
  if (!Array.isArray(obj.conditions)) {
    throw new Error("Config 'conditions' must be an array");
  }

  // Action validation
  if (!obj.action || typeof obj.action !== "object") {
    throw new Error("Config missing required 'action' object");
  }
  const action = obj.action as Record<string, unknown>;
  if (!["buy", "sell"].includes(action.type as string)) {
    throw new Error("Action 'type' must be 'buy' or 'sell'");
  }
  if (typeof action.amount !== "number" || action.amount <= 0) {
    throw new Error("Action 'amount' must be a positive number");
  }

  // Risk validation
  if (!obj.risk || typeof obj.risk !== "object") {
    throw new Error("Config missing required 'risk' object");
  }
  const risk = obj.risk as Record<string, unknown>;
  if (typeof risk.max_position !== "number" || risk.max_position <= 0) {
    throw new Error("Risk 'max_position' must be a positive number");
  }
  if (typeof risk.max_daily_trades !== "number" || risk.max_daily_trades <= 0) {
    throw new Error("Risk 'max_daily_trades' must be a positive number");
  }

  // Schedule validation
  if (!obj.schedule || typeof obj.schedule !== "object") {
    throw new Error("Config missing required 'schedule' object");
  }
  const schedule = obj.schedule as Record<string, unknown>;
  if (typeof schedule.check_interval_seconds !== "number" || schedule.check_interval_seconds <= 0) {
    throw new Error("Schedule 'check_interval_seconds' must be a positive number");
  }
}

export async function parseStrategy(
  description: string
): Promise<{ config: StrategyConfig; explanation: string }> {
  const response = await anthropic.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 1024,
    system: PARSER_PROMPT,
    messages: [
      {
        role: "user",
        content: `Parse this strategy:\n\n"${description}"`,
      },
    ],
  });

  const text =
    response.content[0]?.type === "text" ? response.content[0].text : "";

  let parsedConfig: unknown;
  try {
    parsedConfig = JSON.parse(text);
  } catch (parseErr) {
    console.error("Initial JSON parse failed:", parseErr);
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      try {
        parsedConfig = JSON.parse(jsonMatch[0]);
      } catch (e) {
        console.error("Raw response that failed to parse:", text);
        throw new Error("Failed to parse strategy config from model response");
      }
    } else {
      console.error("Raw response that failed to parse:", text);
      throw new Error("Failed to parse strategy config");
    }
  }

  // Validate the parsed config
  validateStrategyConfig(parsedConfig);
  const config = parsedConfig;

  const explainResponse = await anthropic.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 256,
    messages: [
      {
        role: "user",
        content: `Explain this trading strategy config in 2-3 plain English sentences. Be specific about what it does:\n\n${JSON.stringify(config, null, 2)}`,
      },
    ],
  });

  const explanation =
    explainResponse.content[0]?.type === "text"
      ? explainResponse.content[0].text
      : "";

  return { config, explanation };
}
