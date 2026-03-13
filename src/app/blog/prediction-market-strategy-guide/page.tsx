import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Build a Prediction Market Strategy: A Beginner's Guide (2026) — PredictScript",
  description:
    "Learn how to trade prediction markets with an edge. Covers Kalshi vs Polymarket, binary and range contracts, thesis-driven trading, Kelly criterion sizing, and the most common mistakes new traders make.",
  metadataBase: new URL("https://getpredictscript.com"),
  alternates: {
    canonical: "https://getpredictscript.com/blog/prediction-market-strategy-guide",
  },
  openGraph: {
    title: "How to Build a Prediction Market Strategy: A Beginner's Guide (2026)",
    description:
      "A complete guide to prediction market trading — Kalshi, Polymarket, binary vs range contracts, finding edge, Kelly sizing, and common mistakes.",
    url: "https://getpredictscript.com/blog/prediction-market-strategy-guide",
    siteName: "PredictScript",
    type: "article",
    publishedTime: "2026-03-13T00:00:00.000Z",
    authors: ["PredictScript"],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Build a Prediction Market Strategy (2026 Guide)",
    description:
      "Kalshi, Polymarket, binary vs range, Kelly sizing, thesis-driven trading. Everything you need to trade prediction markets with edge.",
  },
  keywords: [
    "prediction market strategy",
    "how to trade prediction markets",
    "kalshi trading guide",
    "polymarket strategy",
    "binary prediction markets",
    "prediction market edge",
    "kelly criterion prediction markets",
  ],
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "How to Build a Prediction Market Strategy: A Beginner's Guide (2026)",
  description:
    "Learn how to trade prediction markets with an edge. Covers Kalshi vs Polymarket, binary and range contracts, thesis-driven trading, Kelly criterion sizing, and the most common mistakes new traders make.",
  author: {
    "@type": "Organization",
    name: "PredictScript",
    url: "https://getpredictscript.com",
  },
  publisher: {
    "@type": "Organization",
    name: "PredictScript",
    url: "https://getpredictscript.com",
  },
  datePublished: "2026-03-13T00:00:00.000Z",
  dateModified: "2026-03-13T00:00:00.000Z",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://getpredictscript.com/blog/prediction-market-strategy-guide",
  },
  keywords:
    "prediction market strategy, how to trade prediction markets, kalshi trading guide",
  articleSection: "Finance",
  inLanguage: "en-US",
};

export default function PredictionMarketStrategyGuide() {
  return (
    <div
      id="main-content"
      className="min-h-screen"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
              }}
              className="nav-link-hover"
            >
              Blog
            </Link>
            <Link
              href="/"
              style={{
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: "rgba(249,115,22,0.9)",
                textDecoration: "none",
              }}
            >
              Try the Tool
            </Link>
          </div>
        </div>
      </nav>

      {/* ── ARTICLE ─────────────────────────────────────── */}
      <article
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "0 24px 100px",
        }}
      >
        {/* Article header */}
        <header style={{ padding: "52px 0 40px", position: "relative" }}>
          <div className="article-header-glow" />

          {/* Breadcrumb */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "0.78rem",
              color: "rgba(255,255,255,0.25)",
              marginBottom: "24px",
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.03em",
            }}
          >
            <Link
              href="/blog"
              style={{ color: "rgba(249,115,22,0.6)", textDecoration: "none" }}
              className="breadcrumb-link"
            >
              Blog
            </Link>
            <span>/</span>
            <span>Prediction Market Strategy</span>
          </div>

          {/* Tags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: "20px",
            }}
          >
            {["Strategy", "Kalshi", "Polymarket", "Beginner"].map((tag) => (
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

          <h1
            style={{
              fontSize: "clamp(1.75rem, 5vw, 2.375rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              marginBottom: "18px",
              color: "rgba(255,255,255,0.92)",
            }}
          >
            How to Build a Prediction Market Strategy: A Beginner&apos;s Guide (2026)
          </h1>

          <p
            style={{
              fontSize: "1.0625rem",
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.7,
              marginBottom: "28px",
            }}
          >
            Prediction markets have gone mainstream. Kalshi is regulated by the
            CFTC. Polymarket processes millions in weekly volume. But 90% of new
            traders lose money in the first three months — not because markets
            are impossible to beat, but because they approach them like casinos
            instead of information markets. This guide fixes that.
          </p>

          {/* Meta row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              paddingBottom: "28px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #ea580c, #dc2626)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.875rem",
                fontWeight: 700,
                color: "#fff",
                flexShrink: 0,
              }}
            >
              PS
            </div>
            <div>
              <div
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                PredictScript Team
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.25)",
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.03em",
                }}
              >
                March 13, 2026 · 9 min read
              </div>
            </div>
          </div>
        </header>

        {/* Article body */}
        <div className="article-body">

          <Section id="what-are-prediction-markets">
            <SectionHeading>What are prediction markets, exactly?</SectionHeading>
            <p>
              A prediction market is a contract that pays $1 if a specific event
              happens, and $0 if it doesn&apos;t. If you buy a YES contract on
              &ldquo;Will the Fed cut rates in June 2026?&rdquo; for $0.38 and the
              Fed does cut rates, you collect $1 — a 163% return on your
              capital. If they hold, you lose your $0.38.
            </p>
            <p>
              The price of a contract is the market&apos;s implied probability. A
              contract trading at $0.62 means the market thinks there&apos;s a 62%
              chance of the event occurring. Your job as a trader is to find
              cases where you believe the market&apos;s probability is wrong — and
              bet accordingly.
            </p>
            <p>
              This is meaningfully different from sports betting or casino games.
              There is no house edge baked into the contract structure. You&apos;re
              trading against other humans, and the best-informed trader wins
              over time.
            </p>
          </Section>

          <Section id="kalshi-vs-polymarket">
            <SectionHeading>Kalshi vs Polymarket: Which should you use?</SectionHeading>
            <p>
              The two dominant platforms have very different strengths, and
              experienced traders use both.
            </p>

            <CompareTable
              headers={["", "Kalshi", "Polymarket"]}
              rows={[
                ["Regulation", "CFTC-regulated (US legal)", "Crypto-based, no US access officially"],
                ["Collateral", "USD (bank transfer)", "USDC on Polygon"],
                ["Market focus", "Economic, political, news events", "Broader — crypto, sports, geopolitics"],
                ["Liquidity", "Moderate, growing fast", "Higher on major markets"],
                ["API access", "Yes (RSA-PSS auth)", "Yes (free)"],
                ["Best for", "US traders, macro/policy events", "Crypto-native traders, global events"],
              ]}
            />

            <p>
              For most US-based beginners, start with Kalshi. The regulatory
              clarity removes legal ambiguity, deposits are straightforward, and
              the market selection is excellent for macro-oriented strategies. Once
              you have a working process, add Polymarket for the broader market
              selection and typically tighter spreads on high-volume markets.
            </p>
          </Section>

          <Section id="binary-vs-range">
            <SectionHeading>Binary vs range markets: know the difference</SectionHeading>
            <p>
              Not all prediction market contracts are simple yes/no bets. Understanding the two major contract types is essential before you risk real capital.
            </p>

            <InfoBox title="Binary contracts" accent="orange">
              <p>
                The classic structure: the event either happens or it doesn&apos;t.
                Examples: &ldquo;Will Bitcoin close above $100K on March 31?&rdquo; or
                &ldquo;Will the CPI print above 3.0% in February?&rdquo; Pays $1 on
                YES, $0 on NO. These are the easiest to model — you need a
                probability estimate that differs from the current price.
              </p>
            </InfoBox>

            <InfoBox title="Range/scalar markets" accent="red">
              <p>
                The settlement value falls somewhere on a continuous scale.
                Kalshi&apos;s KXWTI (crude oil price bucket) is a common example —
                you&apos;re betting on which $5 price band WTI closes in at expiry.
                These require a different approach: you need a price distribution
                estimate, not just a binary probability. They can offer better
                expected value when your price view is strong but uncertain within
                a range.
              </p>
            </InfoBox>

            <p>
              As a beginner, start with binary markets. They&apos;re simpler to
              analyze, easier to hedge, and the relationship between price and
              probability is direct. Add range markets to your toolkit once you
              have a solid process for binary contracts.
            </p>
          </Section>

          <Section id="finding-edge">
            <SectionHeading>How to find edge: thesis-driven trading</SectionHeading>
            <p>
              The most durable source of edge in prediction markets is having an
              information advantage or a calibration advantage over the crowd.
              Here&apos;s what that looks like in practice:
            </p>

            <NumberedList
              items={[
                {
                  title: "Start with a specific thesis",
                  body: "Don't browse markets looking for action. Start with something you believe and find the market that prices it. Example: you've read every Fed speech this quarter and believe the market is underpricing a June cut. Now find the Kalshi FED-RATE-CUT-JUNE contract and check the price.",
                },
                {
                  title: "Quantify your probability estimate",
                  body: "Before you look at the market price, write down your probability estimate. If you think the Fed cuts in June with 55% confidence, and the market is at 38 cents, that's a +17 percentage point edge — meaningful. If you think it's 42% and the market is 38 cents, that's noise — don't trade it.",
                },
                {
                  title: "Check the implied spread",
                  body: "Prediction markets have bid-ask spreads, especially on lower-volume contracts. The midpoint might be 0.38, but you might only be able to buy at 0.41. That spread comes out of your expected value. On Kalshi, always check both sides before entering.",
                },
                {
                  title: "Ask what information you have that others don't",
                  body: "The crowd is often quite good. Markets efficiently price in publicly available information. Your edge usually comes from either: (a) synthesizing public information better than the average participant, or (b) having domain expertise that lets you make more accurate probability estimates in a specific area.",
                },
                {
                  title: "Track your calibration",
                  body: "The key metric isn't win rate — it's calibration. When you say something is 70% likely, it should happen roughly 70% of the time. Keep a log. If your 70% trades win at 50%, you're systematically overconfident and need to adjust your estimates down.",
                },
              ]}
            />
          </Section>

          <Section id="position-sizing">
            <SectionHeading>Position sizing and bankroll management</SectionHeading>
            <p>
              This is where most prediction market traders fail. A good thesis
              with poor bankroll management will still blow you up. A mediocre
              thesis with disciplined sizing will keep you in the game long
              enough to improve.
            </p>

            <SectionSubHeading>The Kelly Criterion (simplified)</SectionSubHeading>
            <p>
              The Kelly Criterion tells you the optimal fraction of your bankroll
              to bet on any given trade. The formula for a binary market:
            </p>

            <CodeBlock>
              Kelly % = Edge / Odds
              {"\n\n"}
              where:
              {"\n"}
              Edge = your probability - market price
              {"\n"}
              Odds = (1 - market price) / market price
              {"\n\n"}
              Example:
              {"\n"}
              Your estimate: 55% | Market price: 0.38
              {"\n"}
              Edge = 0.55 - 0.38 = 0.17
              {"\n"}
              Odds = (1 - 0.38) / 0.38 = 1.63
              {"\n"}
              Kelly % = 0.17 / 1.63 ≈ 10.4% of bankroll
            </CodeBlock>

            <p>
              In practice, use <strong>half-Kelly or quarter-Kelly</strong>. The
              full Kelly bet maximizes long-run growth mathematically, but it
              requires perfect probability estimates — which you don&apos;t have.
              Using a fraction of Kelly reduces variance dramatically while
              preserving most of the expected growth.
            </p>

            <SectionSubHeading>Hard rules to build around</SectionSubHeading>
            <BulletList
              items={[
                "Never put more than 5% of your prediction market bankroll into a single trade. 2% per trade is more conservative and appropriate for most beginners.",
                "Separate your prediction market capital from your savings. Treat it as a fixed research budget. You can always add more if your process proves out.",
                "Set a maximum daily loss. If you're down 10% in a day, stop. Emotional trading in a market that's moved against you is the fastest path to ruin.",
                "Keep some cash (20-30% of bankroll) in reserve for high-conviction opportunities. Markets get interesting fast when news breaks.",
                "Never average down on a losing position just because you're emotional about being right. Update your thesis on the new information, or close the position.",
              ]}
            />
          </Section>

          <Section id="common-mistakes">
            <SectionHeading>Common mistakes that cost new traders money</SectionHeading>

            <MistakeCard
              number="01"
              title="Trading every market you have an opinion on"
              description="Having an opinion is not the same as having edge. The market is efficient enough on popular events that your vague sense of who will win an election is worthless. Only trade when you can articulate a specific reason you're better-calibrated than the current price."
            />

            <MistakeCard
              number="02"
              title="Ignoring time decay on near-expiry contracts"
              description="A contract expiring in 2 hours behaves very differently from one expiring in 30 days. Near-expiry contracts with prices far from 0 or 1 can be volatile and thin — the spread can eat your entire expected value. Be especially careful with weather and same-day economic release contracts."
            />

            <MistakeCard
              number="03"
              title="Chasing momentum after a market moves against you"
              description="If you bought YES at 0.45 and the market drops to 0.30 on new information, the worst thing you can do is add more because 'it's even cheaper now.' The market moved because other traders updated on information. Unless you have a specific reason the market is wrong, respect the price signal."
            />

            <MistakeCard
              number="04"
              title="Overconcentrating in correlated markets"
              description="Holding YES on Fed-cut-June, YES on 2-year Treasury yield under 4%, and NO on inflation-above-3% are all the same macro bet. If your thesis is wrong, all three lose at once. Diversify across uncorrelated events even within a single macro view."
            />

            <MistakeCard
              number="05"
              title="Not accounting for the platform's fee structure"
              description="Kalshi charges a 1% fee on gross winnings. On a $100 contract that wins, you pay $1. That sounds small, but if you're trading high-frequency on markets with thin edges, fees will eat you alive. Calculate your expected value after fees before entering."
            />

            <MistakeCard
              number="06"
              title="Treating prediction markets like gambling"
              description="The traders who make money long-term approach this like a research process. They read primary sources, track their calibration, review losing trades honestly, and update their models. If you're clicking buttons based on gut feelings, you're funding more disciplined traders."
            />
          </Section>

          <Section id="building-a-process">
            <SectionHeading>Building a repeatable process</SectionHeading>
            <p>
              The difference between consistent winners and consistent losers in
              prediction markets is almost always process. Here&apos;s a minimal
              viable process to start with:
            </p>

            <NumberedList
              items={[
                {
                  title: "Define your focus area",
                  body: "Pick one or two domains where you have genuine expertise or are willing to do deep research — Fed policy, energy markets, specific political jurisdictions, technology earnings. Generalists lose to specialists in prediction markets.",
                },
                {
                  title: "Build a research routine",
                  body: "For macro markets: read the FOMC minutes, CME FedWatch, primary economic data releases. For political markets: read polling aggregators and election law, not headlines. For crypto markets: on-chain data and funding rates, not Twitter sentiment.",
                },
                {
                  title: "Log every trade before you enter",
                  body: "Write down: your probability estimate, why you believe it, the market price, your edge calculation, your position size, and your exit criteria. This forces you to think clearly and gives you something to review when you're wrong.",
                },
                {
                  title: "Review weekly",
                  body: "At the end of each week, review every closed position. For winners: were you actually right for the right reasons, or did you get lucky? For losers: was the thesis wrong, or did you execute correctly on a bet that just didn't hit? These are very different problems with different fixes.",
                },
                {
                  title: "Automate when you're confident",
                  body: "Once you have a repeatable edge — a type of market, a signal, a pattern that works — systematize it. Define the entry condition precisely, the sizing rule, and the exit trigger. This removes emotion and lets you scale. Tools like PredictScript are built for exactly this step.",
                },
              ]}
            />
          </Section>

          <Section id="advanced-concepts">
            <SectionHeading>A note on advanced techniques</SectionHeading>
            <p>
              Once you have a working process, there are several techniques worth
              exploring:
            </p>
            <BulletList
              items={[
                "Cross-platform arbitrage: when Kalshi and Polymarket price the same event differently, a risk-free profit exists (minus fees and execution risk). These windows close fast.",
                "Correlated market hedging: hold YES on Event A and NO on a correlated Event B to reduce variance while preserving directional exposure.",
                "Liquidity provision: on thin markets, placing limit orders on both sides of the book earns the spread. Requires careful inventory management.",
                "Event-driven scalping: economic data releases (CPI, NFP, FOMC) create rapid price moves. Trading the immediate aftermath requires fast execution and a pre-set thesis.",
              ]}
            />
            <p>
              These techniques are mentioned here to acknowledge they exist, not
              as a roadmap for beginners. Get your core thesis-driven process
              working first. Complexity doesn&apos;t create edge — it just amplifies
              whatever your base process already produces.
            </p>
          </Section>

          {/* CTA Section */}
          <div className="article-cta">
            <div className="article-cta-glow" />
            <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
                <span className="section-label">Try It Free</span>
              </div>
              <h2
                style={{
                  fontSize: "1.375rem",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  marginBottom: "12px",
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                Turn your thesis into a working strategy.
              </h2>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "rgba(255,255,255,0.4)",
                  lineHeight: 1.65,
                  maxWidth: "440px",
                  margin: "0 auto 28px",
                }}
              >
                PredictScript translates natural language market theses into
                structured trading strategies — with position sizing, entry
                conditions, and risk controls already built in.
              </p>
              <Link
                href="/"
                className="cta-button"
              >
                Build your first strategy →
              </Link>
              <p
                style={{
                  fontSize: "0.72rem",
                  color: "rgba(255,255,255,0.2)",
                  marginTop: "14px",
                  letterSpacing: "0.02em",
                }}
              >
                Free to try. No credit card required.
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <div
            style={{
              marginTop: "48px",
              padding: "16px 20px",
              background: "rgba(239,68,68,0.05)",
              border: "1px solid rgba(239,68,68,0.12)",
              borderRadius: "12px",
              fontSize: "0.78rem",
              color: "rgba(255,255,255,0.25)",
              lineHeight: 1.65,
            }}
          >
            <strong style={{ color: "rgba(239,68,68,0.5)" }}>⚠ Risk disclosure:</strong>{" "}
            Prediction market trading involves real financial risk. You can lose
            your entire invested capital. Nothing in this article constitutes
            financial advice. Past performance on prediction markets is not
            indicative of future results. Always trade with capital you can
            afford to lose and consult a financial advisor if you are unsure.
          </div>
        </div>
      </article>

      {/* ── FOOTER ──────────────────────────────────────── */}
      <footer className="site-footer" style={{ padding: "36px 0 32px" }}>
        <div
          style={{
            maxWidth: "720px",
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
          <Link
            href="/blog"
            style={{
              fontSize: "0.7rem",
              color: "rgba(249,115,22,0.5)",
              textDecoration: "none",
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.04em",
            }}
            className="breadcrumb-link"
          >
            ← Back to blog
          </Link>
        </div>
      </footer>

      <style>{`
        .article-header-glow {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: min(600px, 100vw);
          height: 280px;
          background: radial-gradient(ellipse at 50% 20%,
            rgba(234,88,12,0.08) 0%,
            rgba(239,68,68,0.04) 45%,
            transparent 70%
          );
          filter: blur(60px);
          pointer-events: none;
        }

        /* ── Article body typography ── */
        .article-body {
          font-size: 1rem;
          line-height: 1.8;
          color: rgba(255,255,255,0.65);
        }

        .article-body p {
          margin-bottom: 1.25em;
          color: rgba(255,255,255,0.6);
        }

        .article-body p:last-child {
          margin-bottom: 0;
        }

        .article-body strong {
          color: rgba(255,255,255,0.85);
          font-weight: 600;
        }

        .article-section {
          margin-bottom: 52px;
          scroll-margin-top: 24px;
        }

        .article-h2 {
          font-size: 1.3125rem;
          font-weight: 800;
          letter-spacing: -0.025em;
          line-height: 1.25;
          color: rgba(255,255,255,0.88);
          margin-bottom: 18px;
          padding-top: 8px;
          position: relative;
          padding-left: 16px;
        }

        .article-h2::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 70%;
          background: linear-gradient(180deg, #f97316, #ef4444);
          border-radius: 2px;
        }

        .article-h3 {
          font-size: 0.9375rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: rgba(255,255,255,0.75);
          margin-top: 28px;
          margin-bottom: 12px;
        }

        /* ── Tables ── */
        .compare-table-wrap {
          margin: 24px 0;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.07);
        }

        .compare-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.875rem;
        }

        .compare-table thead th {
          background: rgba(249,115,22,0.08);
          color: rgba(249,115,22,0.8);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 12px 16px;
          text-align: left;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .compare-table thead th:first-child {
          color: rgba(255,255,255,0.3);
        }

        .compare-table tbody tr {
          border-bottom: 1px solid rgba(255,255,255,0.04);
          transition: background 0.15s ease;
        }

        .compare-table tbody tr:last-child {
          border-bottom: none;
        }

        .compare-table tbody tr:hover {
          background: rgba(249,115,22,0.03);
        }

        .compare-table tbody td {
          padding: 12px 16px;
          color: rgba(255,255,255,0.55);
          vertical-align: top;
        }

        .compare-table tbody td:first-child {
          color: rgba(255,255,255,0.4);
          font-weight: 600;
          font-size: 0.8125rem;
          white-space: nowrap;
        }

        /* ── Info boxes ── */
        .info-box {
          margin: 20px 0;
          border-radius: 14px;
          padding: 20px 22px;
          position: relative;
          overflow: hidden;
        }

        .info-box-orange {
          background: rgba(249,115,22,0.06);
          border: 1px solid rgba(249,115,22,0.18);
        }

        .info-box-red {
          background: rgba(239,68,68,0.06);
          border: 1px solid rgba(239,68,68,0.18);
        }

        .info-box-title {
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 10px;
        }

        .info-box-orange .info-box-title {
          color: rgba(249,115,22,0.8);
        }

        .info-box-red .info-box-title {
          color: rgba(239,68,68,0.7);
        }

        .info-box p {
          margin: 0 !important;
          font-size: 0.9rem;
        }

        /* ── Code block ── */
        .article-code-block {
          background: rgba(0,0,0,0.55);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px;
          padding: 20px 22px;
          font-family: var(--font-mono), monospace;
          font-size: 0.82rem;
          line-height: 1.75;
          color: rgba(255,255,255,0.6);
          overflow-x: auto;
          margin: 20px 0;
          white-space: pre;
          scrollbar-width: thin;
          scrollbar-color: rgba(249,115,22,0.3) transparent;
        }

        /* ── Numbered list ── */
        .numbered-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin: 20px 0;
        }

        .numbered-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .numbered-item-number {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(249,115,22,0.12);
          border: 1px solid rgba(249,115,22,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.72rem;
          font-weight: 700;
          color: rgba(249,115,22,0.8);
          flex-shrink: 0;
          margin-top: 2px;
          font-family: var(--font-mono);
        }

        .numbered-item-content {
          flex: 1;
        }

        .numbered-item-title {
          font-size: 0.9375rem;
          font-weight: 700;
          color: rgba(255,255,255,0.82);
          margin-bottom: 5px;
        }

        .numbered-item-body {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.5);
          line-height: 1.7;
        }

        /* ── Bullet list ── */
        .article-bullet-list {
          list-style: none;
          padding: 0;
          margin: 16px 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .article-bullet-list li {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          font-size: 0.9rem;
          color: rgba(255,255,255,0.55);
          line-height: 1.7;
        }

        .article-bullet-list li::before {
          content: '';
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--brand-orange);
          flex-shrink: 0;
          margin-top: 9px;
          box-shadow: 0 0 6px rgba(249,115,22,0.5);
        }

        /* ── Mistake cards ── */
        .mistake-card {
          display: flex;
          gap: 16px;
          padding: 18px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          align-items: flex-start;
        }

        .mistake-card:last-of-type {
          border-bottom: none;
        }

        .mistake-number {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          font-weight: 700;
          color: rgba(249,115,22,0.5);
          letter-spacing: 0.08em;
          flex-shrink: 0;
          width: 28px;
          padding-top: 3px;
        }

        .mistake-content-title {
          font-size: 0.9375rem;
          font-weight: 700;
          color: rgba(255,255,255,0.82);
          margin-bottom: 6px;
        }

        .mistake-content-desc {
          font-size: 0.875rem;
          color: rgba(255,255,255,0.45);
          line-height: 1.7;
        }

        /* ── CTA ── */
        .article-cta {
          position: relative;
          margin-top: 56px;
          padding: 48px 32px;
          background: rgba(249,115,22,0.04);
          border: 1px solid rgba(249,115,22,0.15);
          border-radius: 20px;
          overflow: hidden;
        }

        .article-cta-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 0%, rgba(234,88,12,0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 14px 28px;
          background: linear-gradient(135deg, #ea580c, #dc2626);
          border-radius: 12px;
          font-size: 0.9375rem;
          font-weight: 700;
          color: #fff;
          text-decoration: none;
          transition: transform 0.15s ease, box-shadow 0.2s ease;
          position: relative;
          overflow: hidden;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 50%);
        }

        .cta-button:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 32px rgba(234,88,12,0.35);
        }

        .cta-button:active {
          transform: translateY(0);
        }

        .nav-link-hover:hover {
          color: rgba(255,255,255,0.85) !important;
        }

        .breadcrumb-link:hover {
          color: rgba(249,115,22,0.9) !important;
        }

        /* ── Responsive ── */
        @media (max-width: 640px) {
          .article-h2 {
            font-size: 1.125rem;
          }

          .compare-table tbody td:first-child {
            white-space: normal;
          }

          .article-cta {
            padding: 32px 20px;
          }

          .numbered-item {
            gap: 12px;
          }
        }
      `}</style>
    </div>
  );
}

/* ── Sub-components (server-safe, no event handlers) ── */

function Section({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="article-section">
      {children}
    </section>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="article-h2">{children}</h2>;
}

function SectionSubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="article-h3">{children}</h3>;
}

function CompareTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="compare-table-wrap">
      <table className="compare-table">
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function InfoBox({
  title,
  accent,
  children,
}: {
  title: string;
  accent: "orange" | "red";
  children: React.ReactNode;
}) {
  return (
    <div className={`info-box info-box-${accent}`}>
      <div className="info-box-title">{title}</div>
      {children}
    </div>
  );
}

function CodeBlock({ children }: { children: React.ReactNode }) {
  return <pre className="article-code-block">{children}</pre>;
}

function NumberedList({
  items,
}: {
  items: { title: string; body: string }[];
}) {
  return (
    <div className="numbered-list">
      {items.map((item, i) => (
        <div key={i} className="numbered-item">
          <div className="numbered-item-number">{i + 1}</div>
          <div className="numbered-item-content">
            <div className="numbered-item-title">{item.title}</div>
            <div className="numbered-item-body">{item.body}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="article-bullet-list">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

function MistakeCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mistake-card">
      <div className="mistake-number">{number}</div>
      <div>
        <div className="mistake-content-title">{title}</div>
        <div className="mistake-content-desc">{description}</div>
      </div>
    </div>
  );
}
