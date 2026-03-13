import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — PredictScript",
  description:
    "Guides, strategies, and deep dives on prediction market trading. Learn how to trade Kalshi and Polymarket with an edge.",
  metadataBase: new URL("https://getpredictscript.com"),
  alternates: { canonical: "https://getpredictscript.com/blog" },
  openGraph: {
    title: "Blog — PredictScript",
    description:
      "Guides and strategies for prediction market trading on Kalshi and Polymarket.",
    url: "https://getpredictscript.com/blog",
    siteName: "PredictScript",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PredictScript Blog — Prediction Market Strategies",
    description:
      "Guides, strategies, and deep dives on trading Kalshi and Polymarket.",
  },
  robots: { index: true, follow: true },
};

const ARTICLES = [
  {
    slug: "prediction-market-strategy-guide",
    title: "How to Build a Prediction Market Strategy: A Beginner's Guide (2026)",
    description:
      "Everything you need to know to start trading prediction markets with an edge — from understanding binary vs range markets to Kelly sizing and the most common mistakes new traders make.",
    date: "March 13, 2026",
    readTime: "9 min read",
    tags: ["Strategy", "Kalshi", "Polymarket", "Beginner"],
  },
];

export default function BlogIndex() {
  return (
    <div
      id="main-content"
      className="min-h-screen"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      {/* ── NAV ─────────────────────────────────────────── */}
      <nav
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          padding: "16px 0",
        }}
      >
        <div
          style={{
            maxWidth: "768px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/"
            style={{
              fontWeight: 800,
              fontSize: "1rem",
              letterSpacing: "-0.02em",
              background: "linear-gradient(135deg, #f97316, #fbbf24)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textDecoration: "none",
            }}
          >
            PredictScript
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Link
              href="/blog"
              style={{
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: "rgba(249,115,22,0.9)",
                textDecoration: "none",
              }}
            >
              Blog
            </Link>
            <Link
              href="/"
              style={{
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
                transition: "color 0.15s ease",
              }}
              className="nav-link-hover"
            >
              Try the Tool
            </Link>
          </div>
        </div>
      </nav>

      {/* ── HEADER ──────────────────────────────────────── */}
      <header
        style={{
          maxWidth: "768px",
          margin: "0 auto",
          padding: "60px 24px 40px",
          position: "relative",
        }}
      >
        <div className="blog-header-glow" />
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <span className="section-label">PredictScript Blog</span>
        </div>
        <h1
          style={{
            fontSize: "clamp(1.875rem, 5vw, 2.75rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: "14px",
            textAlign: "center",
          }}
        >
          Strategies, guides &{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #f97316 0%, #fbbf24 45%, #ef4444 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            market intelligence.
          </span>
        </h1>
        <p
          style={{
            textAlign: "center",
            fontSize: "1rem",
            color: "rgba(255,255,255,0.4)",
            lineHeight: 1.65,
            maxWidth: "480px",
            margin: "0 auto",
          }}
        >
          Deep dives on prediction market trading — Kalshi, Polymarket, position sizing, and finding edge.
        </p>
      </header>

      {/* ── ARTICLES ────────────────────────────────────── */}
      <main
        style={{
          maxWidth: "768px",
          margin: "0 auto",
          padding: "0 24px 80px",
        }}
      >
        <div
          style={{
            display: "grid",
            gap: "16px",
          }}
        >
          {ARTICLES.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              style={{ textDecoration: "none", display: "block" }}
              className="blog-card-link"
            >
              <article className="blog-card">
                {/* Top accent line */}
                <div className="blog-card-accent" />

                <div style={{ padding: "28px 30px" }}>
                  {/* Tags row */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "14px",
                      flexWrap: "wrap",
                    }}
                  >
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          padding: "3px 10px",
                          background: "rgba(249,115,22,0.1)",
                          border: "1px solid rgba(249,115,22,0.2)",
                          borderRadius: "100px",
                          fontSize: "0.68rem",
                          fontWeight: 600,
                          color: "rgba(249,115,22,0.85)",
                          letterSpacing: "0.04em",
                          textTransform: "uppercase",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h2
                    style={{
                      fontSize: "1.1875rem",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      lineHeight: 1.3,
                      color: "rgba(255,255,255,0.9)",
                      marginBottom: "10px",
                    }}
                  >
                    {article.title}
                  </h2>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "rgba(255,255,255,0.4)",
                      lineHeight: 1.65,
                      marginBottom: "18px",
                    }}
                  >
                    {article.description}
                  </p>

                  {/* Meta row */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                        fontSize: "0.78rem",
                        color: "rgba(255,255,255,0.25)",
                        fontFamily: "var(--font-mono)",
                        letterSpacing: "0.03em",
                      }}
                    >
                      <span>{article.date}</span>
                      <span style={{ color: "rgba(255,255,255,0.1)" }}>·</span>
                      <span>{article.readTime}</span>
                    </div>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "5px",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        color: "rgba(249,115,22,0.7)",
                        transition: "color 0.15s ease",
                      }}
                      className="read-more-arrow"
                    >
                      Read →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>

      {/* ── FOOTER ──────────────────────────────────────── */}
      <footer className="site-footer" style={{ padding: "36px 0 32px" }}>
        <div
          style={{
            maxWidth: "768px",
            margin: "0 auto",
            padding: "0 24px",
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
              fontSize: "0.7rem",
              color: "rgba(255,255,255,0.15)",
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.05em",
            }}
          >
            <span style={{ color: "rgba(239,68,68,0.4)" }}>⚠</span> Not financial advice
          </span>
        </div>
      </footer>

      <style>{`
        .blog-header-glow {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: min(500px, 100vw);
          height: 250px;
          background: radial-gradient(ellipse at 50% 20%,
            rgba(234,88,12,0.08) 0%,
            rgba(239,68,68,0.04) 45%,
            transparent 70%
          );
          filter: blur(50px);
          pointer-events: none;
        }

        .blog-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 18px;
          position: relative;
          overflow: hidden;
          transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }

        .blog-card-link:hover .blog-card {
          border-color: rgba(249,115,22,0.25);
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(249,115,22,0.08);
        }

        .blog-card-accent {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(249,115,22,0.3), transparent);
        }

        .blog-card-link:hover .blog-card-accent {
          background: linear-gradient(90deg, transparent, rgba(249,115,22,0.6), transparent);
        }

        .blog-card-link:hover .read-more-arrow {
          color: rgba(249,115,22,0.95) !important;
        }

        .nav-link-hover:hover {
          color: rgba(255,255,255,0.85) !important;
        }

        @media (max-width: 640px) {
          .blog-card > div {
            padding: 20px !important;
          }
        }
      `}</style>
    </div>
  );
}
