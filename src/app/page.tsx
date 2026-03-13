"use client";

import { useState } from "react";
import {
  Terminal,
  Zap,
  AlertCircle,
  Code2,
  MessageSquare,
  Shield,
  ChevronRight,
} from "lucide-react";
import type { StrategyConfig } from "@/lib/strategy-parser";

const EXAMPLES = [
  "If Bitcoin is above $95K on Friday and Kalshi YES odds are under 40 cents, buy 10 contracts",
  "Buy any Polymarket market where the price drops 15% in the last hour and has over $100K volume",
  "Sell YES contracts on weather markets when the probability is above 80% and less than 2 hours to expiry",
  "If crude oil futures are up 3% and Kalshi KXWTI contracts are below 50 cents, buy $50 worth",
];

const TICKER_ITEMS = [
  { label: "BITCOIN ↑ $97,240", change: "+2.4%" },
  { label: "KALSHI ETH-ABOVE-3K", change: "0.38¢" },
  { label: "POLY ELECTION-2026", change: "0.71¢" },
  { label: "CRUDE OIL WTI", change: "$83.40" },
  { label: "FED-RATE-CUT-JUNE", change: "0.44¢" },
  { label: "SP500 ABOVE 5800", change: "0.62¢" },
  { label: "NVIDIA ↑ EARNINGS", change: "+5.1%" },
  { label: "BTCDOM DOMINANCE", change: "54.3%" },
];

const COMING_FEATURES = [
  "Backtest against 55,000+ resolved markets",
  "Paper trading mode with live market data",
  "One-click deploy to Kalshi + Polymarket",
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
  const [waitlistLoading, setWaitlistLoading] = useState(false);

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

  const handleWaitlist = async () => {
    if (!waitlistEmail.includes("@")) return;
    setWaitlistLoading(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: waitlistEmail }),
      });
      const data = await res.json();
      setWaitlistStatus(data.message || data.error);
      if (data.message) setWaitlistEmail("");
    } finally {
      setWaitlistLoading(false);
    }
  };

  return (
    <div id="main-content" className="min-h-screen" style={{ background: "var(--background)", color: "var(--foreground)" }}>

      {/* ── HERO ─────────────────────────────────────── */}
      <section aria-label="Hero" className="relative max-w-4xl mx-auto px-6 pt-16 pb-6 text-center overflow-hidden">
        <div className="hero-glow-primary" />

        {/* Status badge */}
        <div className="animate-fade-up flex justify-center mb-5">
          <span className="status-badge">
            <span className="status-badge-dot" />
            Kalshi · Polymarket · Natural Language
          </span>
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up-delay-1 relative"
          style={{
            fontSize: "clamp(2.75rem, 7vw, 5rem)",
            fontWeight: 800,
            lineHeight: 1.02,
            letterSpacing: "-0.03em",
            marginBottom: "1.25rem",
          }}
        >
          Describe your strategy.
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #f97316 0%, #fbbf24 45%, #ef4444 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            We build the bot.
          </span>
        </h1>

        <p
          className="animate-fade-up-delay-2"
          style={{
            fontSize: "1.0625rem",
            color: "rgba(255,255,255,0.45)",
            maxWidth: "520px",
            margin: "0 auto 1.5rem",
            lineHeight: 1.65,
          }}
        >
          Type your prediction market strategy in plain English. PredictScript
          parses it into executable logic with risk controls — ready to backtest
          and deploy.
        </p>

        {/* Platform pills */}
        <div className="animate-fade-up-delay-3 flex flex-wrap justify-center gap-2">
          {["Kalshi", "Polymarket", "Backtesting", "Risk Controls", "NLP Parsing"].map((tag) => (
            <span key={tag} className="feature-pill">
              <span className="feature-pill-dot" />
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* ── TICKER ───────────────────────────────────── */}
      <div
        style={{
          overflow: "hidden",
          borderTop: "1px solid rgba(255,255,255,0.04)",
          borderBottom: "1px solid rgba(255,255,255,0.04)",
          background: "rgba(0,0,0,0.3)",
          padding: "10px 0",
          marginBottom: "2rem",
          cursor: "default",
          userSelect: "none",
        }}
        aria-hidden="true"
      >
        <div className="ticker-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "0 32px",
                fontSize: "0.72rem",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.06em",
                color: "rgba(255,255,255,0.3)",
                borderRight: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <span>{item.label}</span>
              <span style={{ color: "rgba(249,115,22,0.7)" }}>{item.change}</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── STRATEGY INPUT ────────────────────────────── */}
      <div className="max-w-2xl mx-auto px-4 pb-5">
        <div className="command-surface" style={{ padding: "24px" }}>
          {/* Label row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "14px",
            }}
          >
            <label
              htmlFor="strategy-input"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: "rgba(255,255,255,0.5)",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              <Terminal style={{ width: 14, height: 14, color: "var(--brand-orange)" }} />
              Strategy Input
            </label>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                color: "rgba(255,255,255,0.15)",
                letterSpacing: "0.05em",
              }}
            >
              NLP → JSON
            </span>
          </div>

          {/* Textarea */}
          <textarea
            id="strategy-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="If Bitcoin is above $95K on Friday and Kalshi YES odds are under 40 cents, buy 10 contracts..."
            rows={4}
            className="strategy-input"
            onKeyDown={(e) => {
              if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                handleParse();
              }
            }}
          />

          {/* Hint */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              marginTop: "6px",
              marginBottom: "14px",
            }}
          >
            <span className="kbd-hint-desktop" style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.18)", fontFamily: "var(--font-mono)" }}>
              ⌘ + Enter to parse
            </span>
          </div>

          {/* Example chips */}
          <div style={{ marginBottom: "16px" }}>
            <div
              style={{
                fontSize: "0.68rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "rgba(255,255,255,0.2)",
                marginBottom: "8px",
              }}
            >
              Try an example
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {EXAMPLES.map((ex, i) => (
                <button
                  key={i}
                  onClick={() => setDescription(ex)}
                  className="example-chip"
                  title={ex}
                >
                  {ex.slice(0, 52)}…
                </button>
              ))}
            </div>
          </div>

          {/* Parse button */}
          <button
            onClick={handleParse}
            disabled={loading || description.trim().length < 10}
            className="parse-btn"
            aria-label="Parse your prediction market strategy"
          >
            {loading ? (
              <>
                <div
                  style={{
                    width: 18,
                    height: 18,
                    border: "2px solid rgba(255,255,255,0.25)",
                    borderTopColor: "#fff",
                    borderRadius: "50%",
                    animation: "spin 0.7s linear infinite",
                  }}
                />
                Parsing strategy...
              </>
            ) : (
              <>
                <Zap style={{ width: 18, height: 18 }} />
                Parse Strategy
              </>
            )}
          </button>
        </div>
      </div>

      {/* ── ERROR ─────────────────────────────────────── */}
      {error && (
        <div className="max-w-2xl mx-auto px-4 pb-4">
          <div
            style={{
              background: "rgba(239,68,68,0.08)",
              border: "1px solid rgba(239,68,68,0.2)",
              borderRadius: "12px",
              padding: "14px 16px",
              display: "flex",
              alignItems: "flex-start",
              gap: "10px",
            }}
          >
            <AlertCircle style={{ width: 16, height: 16, color: "#f87171", flexShrink: 0, marginTop: 1 }} />
            <p style={{ fontSize: "0.875rem", color: "#fca5a5", margin: 0 }}>{error}</p>
          </div>
        </div>
      )}

      {/* ── RESULTS ───────────────────────────────────── */}
      {result && (
        <div className="max-w-2xl mx-auto px-4 pb-16" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>

          {/* Section label */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "8px 0 2px" }}>
            <span className="section-label">Parsed Output</span>
            <span
              style={{
                background: "rgba(34,197,94,0.15)",
                border: "1px solid rgba(34,197,94,0.25)",
                borderRadius: "100px",
                padding: "2px 10px",
                fontSize: "0.68rem",
                fontWeight: 600,
                color: "#86efac",
                letterSpacing: "0.04em",
              }}
            >
              ✓ Valid
            </span>
          </div>

          {/* Strategy Summary */}
          <div className="result-card">
            <h3
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "0.75rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "rgba(255,255,255,0.35)",
                marginBottom: "12px",
              }}
            >
              <MessageSquare style={{ width: 13, height: 13, color: "#60a5fa" }} />
              Strategy Summary
            </h3>
            <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.65, margin: 0 }}>
              {result.explanation}
            </p>
          </div>

          {/* Conditions + Risk side by side */}
          <div className="result-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>

            {/* Conditions */}
            <div className="result-card">
              <h4
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "rgba(255,255,255,0.35)",
                  marginBottom: "12px",
                }}
              >
                Conditions
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                {result.config.conditions.map((c, i) => (
                  <div key={i} className="condition-tag">
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.7rem",
                        color: "var(--brand-orange)",
                        fontWeight: 500,
                      }}
                    >
                      {c.field}
                    </span>
                    <span style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.25)" }}>{c.operator}</span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.7rem",
                        color: "rgba(255,255,255,0.8)",
                      }}
                    >
                      {Array.isArray(c.value) ? c.value.join(" – ") : c.value}
                      {c.unit ? ` ${c.unit}` : ""}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Risk Controls */}
            <div className="result-card">
              <h4
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "rgba(255,255,255,0.35)",
                  marginBottom: "12px",
                }}
              >
                <Shield style={{ width: 12, height: 12, color: "#34d399" }} />
                Risk Controls
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {[
                  { label: "Max position", value: `$${result.config.risk.max_position}` },
                  { label: "Stop loss", value: result.config.risk.stop_loss != null ? `${result.config.risk.stop_loss}%` : "None" },
                  { label: "Take profit", value: result.config.risk.take_profit != null ? `${result.config.risk.take_profit}%` : "None" },
                  { label: "Max daily trades", value: String(result.config.risk.max_daily_trades) },
                ].map((row, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "9px 0",
                      borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.04)" : "none",
                    }}
                  >
                    <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.3)" }}>{row.label}</span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.8125rem",
                        color: "rgba(255,255,255,0.85)",
                        fontWeight: 500,
                      }}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Raw JSON */}
          <div className="result-card">
            <h3
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "0.72rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "rgba(255,255,255,0.35)",
                marginBottom: "14px",
              }}
            >
              <Code2 style={{ width: 13, height: 13, color: "var(--brand-orange)" }} />
              Strategy Config
              <span
                style={{
                  marginLeft: "auto",
                  background: "rgba(249,115,22,0.1)",
                  border: "1px solid rgba(249,115,22,0.2)",
                  borderRadius: "6px",
                  padding: "2px 8px",
                  fontSize: "0.62rem",
                  color: "rgba(249,115,22,0.8)",
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.04em",
                  textTransform: "none",
                  fontWeight: 500,
                }}
              >
                JSON
              </span>
            </h3>
            <pre className="code-block">
              {JSON.stringify(result.config, null, 2)}
            </pre>
          </div>

          {/* Coming Soon */}
          <div
            className="result-card"
            style={{
              background: "rgba(249,115,22,0.04)",
              borderColor: "rgba(249,115,22,0.15)",
            }}
          >
            <h3
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "0.72rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "rgba(249,115,22,0.6)",
                marginBottom: "12px",
              }}
            >
              Coming Next
            </h3>
            <div>
              {COMING_FEATURES.map((feat, i) => (
                <div key={i} className="next-steps-item">
                  <span className="next-steps-dot" />
                  <span style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.5)" }}>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── WAITLIST SECTION ─────────────────────────── */}
      <section aria-label="Early access waitlist" className="waitlist-section" style={{ background: "rgba(0,0,0,0.2)", padding: "60px 0 60px" }}>
        <div className="waitlist-inner max-w-2xl mx-auto px-6">

          {/* Section label */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "28px" }}>
            <span className="section-label">Early Access</span>
          </div>

          {/* Headline */}
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2
              style={{
                fontSize: "1.375rem",
                fontWeight: 700,
                color: "rgba(255,255,255,0.85)",
                letterSpacing: "-0.02em",
                marginBottom: "12px",
              }}
            >
              Backtesting + live deployment on the way.
            </h2>
            <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.6 }}>
              Join the waitlist and be first to know when we ship backtesting
              against 55,000+ resolved markets, paper trading, and one-click deploy.
            </p>
          </div>

          {/* Feature highlights */}
          <div
            className="waitlist-feature-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "12px",
              marginBottom: "32px",
            }}
          >
            {[
              { label: "55K+ Markets", sub: "Historical backtest data" },
              { label: "Paper Trading", sub: "Risk-free simulation" },
              { label: "One-Click Deploy", sub: "Kalshi & Polymarket" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "12px",
                  padding: "16px 14px",
                  textAlign: "center",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(249,115,22,0.06)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(249,115,22,0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.03)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)";
                }}
              >
                <div style={{ fontSize: "0.8125rem", fontWeight: 700, color: "rgba(255,255,255,0.8)", marginBottom: "3px" }}>
                  {item.label}
                </div>
                <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.3)" }}>{item.sub}</div>
              </div>
            ))}
          </div>

          {/* Email form */}
          {waitlistStatus ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                padding: "18px",
                background: "rgba(34,197,94,0.08)",
                border: "1px solid rgba(34,197,94,0.2)",
                borderRadius: "14px",
                color: "#86efac",
                fontSize: "0.9375rem",
                fontWeight: 600,
              }}
            >
              <span style={{ fontSize: "1.2rem" }}>✓</span>
              {waitlistStatus}
            </div>
          ) : (
            <div
              className="waitlist-form-row"
              style={{
                display: "flex",
                gap: "10px",
                background: "rgba(0,0,0,0.4)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                padding: "8px",
              }}
            >
              <label htmlFor="waitlist-email" className="sr-only">Email address</label>
              <input
                id="waitlist-email"
                type="email"
                value={waitlistEmail}
                onChange={(e) => setWaitlistEmail(e.target.value)}
                placeholder="your@email.com"
                className="waitlist-input"
                style={{ border: "none", background: "transparent", boxShadow: "none" }}
                aria-label="Your email address for early access"
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleWaitlist();
                }}
              />
              <button
                onClick={handleWaitlist}
                disabled={waitlistLoading || !waitlistEmail.includes("@")}
                className="waitlist-btn"
                aria-label="Join the early access waitlist"
                style={{
                  opacity: (!waitlistEmail.includes("@") && !waitlistLoading) ? 0.5 : 1,
                  cursor: !waitlistEmail.includes("@") ? "not-allowed" : "pointer",
                }}
              >
                {waitlistLoading ? (
                  <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <div
                      style={{
                        width: 14,
                        height: 14,
                        border: "2px solid rgba(255,255,255,0.3)",
                        borderTopColor: "#fff",
                        borderRadius: "50%",
                        animation: "spin 0.7s linear infinite",
                      }}
                    />
                    Joining…
                  </span>
                ) : (
                  <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    Get Early Access
                    <ChevronRight style={{ width: 15, height: 15 }} />
                  </span>
                )}
              </button>
            </div>
          )}

          <p
            style={{
              textAlign: "center",
              fontSize: "0.72rem",
              color: "rgba(255,255,255,0.2)",
              marginTop: "14px",
              letterSpacing: "0.02em",
            }}
          >
            No spam. Unsubscribe anytime. We&apos;ll email once when it ships.
          </p>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────── */}
      <footer className="site-footer" style={{ padding: "36px 0 32px" }}>
        <div
          className="footer-grid max-w-2xl mx-auto px-6"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "center",
            gap: "24px",
          }}
        >
          {/* Left: brand + tagline */}
          <div>
            <div className="footer-logo" style={{ marginBottom: "5px" }}>
              PredictScript
            </div>
            <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.22)", margin: 0, letterSpacing: "0.01em" }}>
              Natural language → prediction market bot
            </p>
          </div>

          {/* Right: links */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.7rem",
                color: "rgba(255,255,255,0.15)",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.05em",
              }}
            >
              <span style={{ color: "rgba(239,68,68,0.5)" }}>⚠</span>
              Not financial advice
            </span>
          </div>
        </div>

        {/* Bottom strip */}
        <div
          style={{
            maxWidth: "672px",
            margin: "24px auto 0",
            padding: "0 24px",
            paddingTop: "16px",
            borderTop: "1px solid rgba(255,255,255,0.04)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.15)" }}>
            © 2026 PredictScript. All rights reserved.
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.62rem",
              color: "rgba(255,255,255,0.1)",
              letterSpacing: "0.08em",
            }}
          >
            v0.1.0-beta
          </span>
        </div>
      </footer>

      {/* Mobile layout overrides */}
      <style>{`
        @media (max-width: 640px) {
          .result-grid { grid-template-columns: 1fr !important; }
          .waitlist-feature-grid { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr !important; text-align: center; }
          .waitlist-form-row { flex-direction: column !important; }
          .waitlist-form-row .waitlist-btn { width: 100%; justify-content: center; }
          .kbd-hint-desktop { display: none !important; }
        }
      `}</style>
    </div>
  );
}
