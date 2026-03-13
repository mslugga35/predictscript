# PredictScript
> Last verified: 2026-03-13

## Project
- **Repo:** `github.com/mslugga35/predictscript` (branch: `master`)
- **Live:** https://getpredictscript.com
- **Stack:** Next.js 16 + Claude API + Tailwind 4 + Vercel
- **Fonts:** Outfit (body), monospace TBD
- **Colors:** Dark mode, orange→red gradients

## Architecture
- **Homepage:** `src/app/page.tsx` — Landing page (scaffold)
- **Status:** Early scaffold — core NLP→strategy feature not built yet

## What It Should Do
1. User describes a prediction market thesis in natural language (e.g., "I think the Fed will cut rates in June")
2. Claude parses intent → maps to Kalshi/Polymarket markets
3. Shows matching contracts with current prices
4. Generates a trading strategy (entry, size, exit triggers)
5. Optional: backtest against historical data

## Env Vars
- `ANTHROPIC_API_KEY` — Claude API
- (Future: `KALSHI_API_KEY`, `KALSHI_PRIVATE_KEY`)

## Deploying
`cd predictscript && npx vercel --prod --scope mslugga35s-projects`

## Next Priorities
1. **NLP→Market mapper** — Claude parses natural language thesis → finds matching Kalshi series
2. **Market browser** — Show live Kalshi markets by category
3. **Strategy builder** — Kelly sizing, entry/exit rules
4. **Backtest engine** — Historical market data → simulated PnL
5. **Kalshi Builders Program** — Apply for API access + partnership
6. **Distribution** — Reddit (r/predictit, r/kalshi, r/polymarket), X

## Gotchas
- Most complex of the 3 startups.rip rebuilds — needs NLP + market data integration
- Kalshi API requires RSA-PSS auth (see predict-market-bot for implementation)
- No database yet — will need Supabase for saved strategies
- NEVER create Vercel deploy hooks (see main CLAUDE.md)
