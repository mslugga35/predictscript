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

export async function parseStrategy(
  description: string
): Promise<{ config: StrategyConfig; explanation: string }> {
  const anthropic = new Anthropic();

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
    response.content[0].type === "text" ? response.content[0].text : "";

  let config: StrategyConfig;
  try {
    config = JSON.parse(text);
  } catch {
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      config = JSON.parse(jsonMatch[0]);
    } else {
      throw new Error("Failed to parse strategy config");
    }
  }

  // Generate human-readable explanation
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
    explainResponse.content[0].type === "text"
      ? explainResponse.content[0].text
      : "";

  return { config, explanation };
}
