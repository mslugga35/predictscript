# PredictScript

> Describe your prediction market strategy in plain English. PredictScript parses it into executable logic with risk controls — ready to backtest and deploy.

## What It Does

PredictScript is a natural language interface for building prediction market trading strategies. Tell it your thesis in English, and it automatically:

1. **Parses** your strategy description using Claude AI
2. **Extracts** conditions (price levels, probabilities, time windows)
3. **Generates** structured trading logic with risk controls
4. **Outputs** JSON configs ready for backtesting or live trading

## Stack

- **Framework:** Next.js 16 (React 19)
- **Styling:** Tailwind CSS 4
- **AI:** Anthropic Claude API
- **Deployment:** Vercel
- **Language:** TypeScript

## Getting Started

### Prerequisites

- Node.js 18+
- `ANTHROPIC_API_KEY` from [console.anthropic.com](https://console.anthropic.com)

### Local Development

```bash
# Copy env template
cp .env.example .env.local

# Add your Anthropic API key to .env.local
# ANTHROPIC_API_KEY=sk-ant-...

# Install dependencies
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and start describing strategies.

## API Routes

### `POST /api/parse`

Parses a natural language strategy description.

**Request:**
```json
{
  "description": "If Bitcoin is above $95K and Kalshi odds are under 40 cents, buy 10 contracts"
}
```

**Response:**
```json
{
  "config": {
    "name": "btc_break_above_95k",
    "description": "Buy Kalshi contracts when BTC breaks above $95K with favorable odds.",
    "platform": "kalshi",
    "conditions": [
      {
        "type": "price",
        "field": "btc_price",
        "operator": "gte",
        "value": 95000,
        "unit": "dollars"
      },
      {
        "type": "probability",
        "field": "market_price",
        "operator": "lte",
        "value": 40,
        "unit": "cents"
      }
    ],
    "action": { "type": "buy", "amount": 10, "amount_type": "contracts" },
    "risk": {
      "max_position": 100,
      "stop_loss": 30,
      "take_profit": 50,
      "max_daily_trades": 5
    },
    "schedule": {
      "check_interval_seconds": 60,
      "active_hours": null,
      "active_days": null
    }
  },
  "explanation": "This strategy buys 10 Kalshi contracts when Bitcoin reaches $95K and market probability is under 40 cents, with a 30% stop loss and 50% take profit."
}
```

**Rate Limit:** 5 requests per minute per IP

### `POST /api/waitlist`

Adds an email to the early access waitlist.

**Request:**
```json
{
  "email": "user@example.com"
}
```

## Roadmap

- [ ] **Backtest Engine** — Run strategies against 55,000+ resolved markets
- [ ] **Paper Trading** — Simulate live trading with historical data
- [ ] **Market Browser** — Browse live Kalshi & Polymarket contracts
- [ ] **One-Click Deploy** — Deploy directly to Kalshi & Polymarket APIs
- [ ] **Risk Analytics** — Kelly sizing, portfolio optimization, stress testing

## Environment Variables

See `.env.example` for required configuration:

- `ANTHROPIC_API_KEY` — Your Claude API key (required)

## Contributing

This project is maintained as a startup by [mslugga35](https://github.com/mslugga35). Issues and feedback welcome via GitHub.

## Disclaimer

**Not financial advice.** This tool is for educational and simulation purposes only. Do not use real money without fully understanding prediction markets and the risks involved.

## License

MIT
