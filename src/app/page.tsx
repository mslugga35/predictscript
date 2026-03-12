"use client";

import { useState } from "react";
import {
  Terminal,
  Zap,
  ArrowRight,
  AlertCircle,
  Code2,
  MessageSquare,
  Shield,
} from "lucide-react";
import type { StrategyConfig } from "@/lib/strategy-parser";

const EXAMPLES = [
  "If Bitcoin is above $95K on Friday and Kalshi YES odds are under 40 cents, buy 10 contracts",
  "Buy any Polymarket market where the price drops 15% in the last hour and has over $100K volume",
  "Sell YES contracts on weather markets when the probability is above 80% and less than 2 hours to expiry",
  "If crude oil futures are up 3% and Kalshi KXWTI contracts are below 50 cents, buy $50 worth",
];

export default function Home() {
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    config: StrategyConfig;
    explanation: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [waitlistStatus, setWaitlistStatus] = useState<string | null>(null);

  const handleParse = async () => {
    if (description.trim().length < 10) return;
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch("/api/parse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description: description.trim() }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero */}
      <div className="relative max-w-3xl mx-auto px-4 pt-20 pb-10">
        <div className="terminal-glow" />
        <div className="text-center space-y-5 relative">
          <div className="animate-fade-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-sm text-zinc-400 backdrop-blur-sm">
            <Terminal className="w-4 h-4 text-orange-400" />
            Kalshi + Polymarket
          </div>
          <h1 className="animate-fade-up-delay-1 text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
            Describe Your Strategy
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-red-400 bg-clip-text text-transparent">
              We Build the Bot
            </span>
          </h1>
          <p className="animate-fade-up-delay-2 text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Type your prediction market strategy in plain English. PredictScript
            converts it to executable code with backtesting and risk controls.
          </p>
        </div>
      </div>

      {/* Input */}
      <div className="max-w-2xl mx-auto px-4 pb-4">
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 space-y-4">
          <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            Describe your strategy
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="If Bitcoin is above $95K on Friday and Kalshi YES odds are under 40 cents, buy 10 contracts..."
            rows={4}
            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all resize-none"
          />

          {/* Example chips */}
          <div className="flex flex-wrap gap-2">
            {EXAMPLES.map((ex, i) => (
              <button
                key={i}
                onClick={() => setDescription(ex)}
                className="text-xs px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg text-zinc-400 hover:text-zinc-200 transition-colors truncate max-w-[250px]"
              >
                {ex.slice(0, 50)}...
              </button>
            ))}
          </div>

          <button
            onClick={handleParse}
            disabled={loading || description.trim().length < 10}
            className="w-full py-3 px-6 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 disabled:from-zinc-700 disabled:to-zinc-700 disabled:cursor-not-allowed rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Parsing strategy...
              </>
            ) : (
              <>
                <Zap className="w-5 h-5" />
                Parse Strategy
              </>
            )}
          </button>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="max-w-2xl mx-auto px-4 pb-4">
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <p className="text-sm text-red-300">{error}</p>
          </div>
        </div>
      )}

      {/* Result */}
      {result && (
        <div className="max-w-2xl mx-auto px-4 pb-16 space-y-4">
          {/* Explanation */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-5">
            <h3 className="font-semibold text-zinc-200 flex items-center gap-2 mb-2">
              <MessageSquare className="w-4 h-4 text-blue-400" />
              Strategy Summary
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {result.explanation}
            </p>
          </div>

          {/* Config Panels */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Conditions */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-5">
              <h4 className="text-sm font-semibold text-zinc-300 mb-3">
                Conditions
              </h4>
              <div className="space-y-2">
                {result.config.conditions.map((c, i) => (
                  <div key={i} className="bg-zinc-800/50 rounded-lg px-3 py-2">
                    <span className="text-xs text-orange-400 font-mono">
                      {c.field}
                    </span>
                    <span className="text-xs text-zinc-500 mx-1">
                      {c.operator}
                    </span>
                    <span className="text-xs text-zinc-200 font-mono">
                      {Array.isArray(c.value)
                        ? c.value.join(" - ")
                        : c.value}
                      {c.unit ? ` ${c.unit}` : ""}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Risk Controls */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-5">
              <h4 className="text-sm font-semibold text-zinc-300 mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                Risk Controls
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-zinc-500">Max position</span>
                  <span className="text-zinc-200">
                    ${result.config.risk.max_position}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Stop loss</span>
                  <span className="text-zinc-200">
                    {result.config.risk.stop_loss != null
                      ? `${result.config.risk.stop_loss}%`
                      : "None"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Take profit</span>
                  <span className="text-zinc-200">
                    {result.config.risk.take_profit != null
                      ? `${result.config.risk.take_profit}%`
                      : "None"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Max daily trades</span>
                  <span className="text-zinc-200">
                    {result.config.risk.max_daily_trades}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Raw JSON */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-5">
            <h3 className="font-semibold text-zinc-200 flex items-center gap-2 mb-3">
              <Code2 className="w-4 h-4 text-orange-400" />
              Strategy Config (JSON)
            </h3>
            <pre className="text-xs text-zinc-400 bg-zinc-800/50 rounded-xl p-4 overflow-x-auto font-mono">
              {JSON.stringify(result.config, null, 2)}
            </pre>
          </div>

          {/* Next Steps */}
          <div className="bg-orange-500/5 border border-orange-500/20 rounded-2xl p-5">
            <h3 className="font-semibold text-orange-300 text-sm mb-2">
              Coming Soon
            </h3>
            <ul className="text-sm text-zinc-400 space-y-1">
              <li className="flex items-center gap-2">
                <ArrowRight className="w-3 h-3 text-orange-400" />
                Backtest against 55,000+ resolved markets
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-3 h-3 text-orange-400" />
                Paper trading mode with live market data
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-3 h-3 text-orange-400" />
                One-click deploy to Kalshi + Polymarket
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Waitlist */}
      <div className="max-w-md mx-auto px-4 pb-16">
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 text-center space-y-3">
          <h3 className="font-semibold text-zinc-200">Get early access</h3>
          <p className="text-sm text-zinc-500">Backtesting, paper trading, and one-click deploy coming soon.</p>
          <div className="flex gap-2">
            <input
              type="email"
              value={waitlistEmail}
              onChange={(e) => setWaitlistEmail(e.target.value)}
              placeholder="you@email.com"
              className="flex-1 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 text-sm"
            />
            <button
              onClick={async () => {
                if (!waitlistEmail.includes("@")) return;
                const res = await fetch("/api/waitlist", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email: waitlistEmail }),
                });
                const data = await res.json();
                setWaitlistStatus(data.message || data.error);
                if (data.message) setWaitlistEmail("");
              }}
              className="px-4 py-2 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 rounded-xl text-sm font-medium whitespace-nowrap"
            >
              Get Access
            </button>
          </div>
          {waitlistStatus && (
            <p className="text-sm text-emerald-400">{waitlistStatus}</p>
          )}
        </div>
      </div>

      <footer className="border-t border-zinc-900 py-8 text-center text-sm text-zinc-600">
        PredictScript — Natural Language Prediction Market Strategies
        <br />
        <span className="text-zinc-700">
          Not financial advice. Use at your own risk.
        </span>
      </footer>
    </div>
  );
}
