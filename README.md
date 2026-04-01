# PredictScript

**Plain English to Prediction Market Strategies** — Describe your thesis in natural language. PredictScript parses it, finds matching markets, and generates a trading strategy.

- **Live:** https://getpredictscript.com
- **Repo:** `github.com/mslugga35/predictscript` (branch: `master`)
- **Stack:** Next.js 16 + Claude API + Tailwind 4

## What It Does

1. **Describe** — Tell PredictScript your prediction market thesis in plain English
   - _Example: "I think Bitcoin will stay above $95K through Friday"_
   - _Example: "If oil futures rally 3%, buy Kalshi WTI contracts under 50¢"_

2. **Parse** — Claude's API converts natural language → structured strategy config
   - Extracts conditions, entry/exit rules, position sizing
   - Defaults for missing parameters (platform, size, risk controls)

3. **Generate** — Get a trading strategy with:
   - Market conditions to watch
   - Action type (buy/sell) and amount
   - Risk controls (max position, stop loss, take profit)
   - Schedule (check intervals, active hours/days)

4. **Execute** — Strategy config can be deployed to Kalshi and Polymarket _(future feature)_

## Tech Stack

- **Frontend:** Next.js 16, React 19, Tailwind 4, Lucide icons
- **Backend:** Next.js API routes with rate limiting and input validation
- **AI:** Anthropic Claude API (Sonnet for parsing, Haiku for explanations)
- **Deployment:** Vercel
- **Fonts:** Outfit (body), Fira Code (monospace)
- **Colors:** Dark mode with orange→red gradient accents

## Development

### Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

### Building

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

## Architecture

- **`src/app/page.tsx`** — Home page with hero, strategy input, examples, coming features
- **`src/app/layout.tsx`** — Root layout with metadata, fonts, JSON-LD schema
- **`src/app/api/parse/route.ts`** — NLP parser: accepts strategy description → returns config + explanation
- **`src/app/api/waitlist/route.ts`** — Waitlist signup with email validation, Resend integration
- **`src/lib/strategy-parser.ts`** — Core parser logic; calls Claude Sonnet for JSON config, Haiku for explanation
- **`src/app/blog/`** — SEO blog with prediction market strategy guides
- **`src/app/globals.css`** — Design system, glow effects, animations

## Environment Variables

- **`ANTHROPIC_API_KEY`** — Claude API key (required for parse endpoint)
- **`RESEND_API_KEY`** — Resend email service (optional; waitlist won't notify if not set)
- **`WAITLIST_NOTIFY_EMAIL`** — Email to notify on waitlist signups (requires Resend key)

## API Routes

### `POST /api/parse`

Parse a strategy description into a structured config.

**Request:**
```json
{ "description": "Buy Kalshi BTC contracts if price dips below $95K" }
```

**Response:**
```json
{
  "config": {
    "name": "btc_dip_buy",
    "description": "Buy BTC contracts on price dips",
    "platform": "kalshi",
    "conditions": [...],
    "action": { "type": "buy", "amount": 10, "amount_type": "contracts" },
    "risk": { "max_position": 100, "stop_loss": 30, "take_profit": 50, "max_daily_trades": 5 },
    "schedule": { "check_interval_seconds": 60, "active_hours": null, "active_days": null }
  },
  "explanation": "This strategy buys 10 Kalshi BTC contracts when the price falls below $95K, with a max loss of 30% and profit target of 50%."
}
```

**Status codes:**
- `200` — Success
- `400` — Invalid description (too short, too long, not a string)
- `429` — Rate limited (5 requests/min per IP)
- `500` — Parse error

### `POST /api/waitlist`

Add email to waitlist; optionally notify via Resend.

**Request:**
```json
{ "email": "user@example.com" }
```

**Response:**
```json
{ "message": "You're on the list!" }
```

**Status codes:**
- `200` — Success
- `400` — Invalid email
- `429` — Rate limited (3 requests/min per IP)
- `500` — Waitlist error

## Next Priorities

1. **Market browser** — Show live Kalshi/Polymarket markets by category
2. **Backtest engine** — Simulate strategy against historical market data
3. **Strategy persistence** — Save strategies to Supabase
4. **Kalshi API integration** — Live order execution and account management
5. **Polymarket API integration** — Cross-platform strategy support
6. **Paper trading** — Live market data with simulated orders
7. **Distribution** — Launch on Reddit (r/predictit, r/kalshi, r/polymarket) and X

## Security

- **Rate limiting:** 5 req/min (parse), 3 req/min (waitlist) per IP
- **Input validation:** Max 1000 chars for descriptions, email regex validation
- **Error handling:** Generic error messages; detailed logs server-side only
- **No database:** Strategies are stateless; future migrations will use Supabase

## Deployment

```bash
cd predictscript && npx vercel --prod --scope mslugga35s-projects
```

**Note:** Never create Vercel deploy hooks (see main CLAUDE.md).

## Resources

- [Claude API Documentation](https://docs.anthropic.com)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Kalshi API Docs](https://kalshi.com/api) _(coming integration)_
- [Polymarket API Docs](https://clob.polymarket.com) _(coming integration)_

## License

Proprietary — mslugga35
