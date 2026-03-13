import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found | PredictScript",
  description: "This page doesn't exist. Head back to PredictScript to build your prediction market strategy.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--background)",
        color: "var(--foreground)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        textAlign: "center",
        fontFamily: "var(--font-sans), system-ui, sans-serif",
      }}
    >
      {/* Glow */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "500px",
          height: "300px",
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(234,88,12,0.12) 0%, rgba(239,68,68,0.06) 45%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      {/* 404 badge */}
      <div
        style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: "0.75rem",
          fontWeight: 600,
          letterSpacing: "0.15em",
          color: "rgba(249,115,22,0.7)",
          textTransform: "uppercase",
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <span
          style={{
            width: "20px",
            height: "1px",
            background: "rgba(249,115,22,0.5)",
            display: "inline-block",
          }}
        />
        404
        <span
          style={{
            width: "20px",
            height: "1px",
            background: "rgba(249,115,22,0.5)",
            display: "inline-block",
          }}
        />
      </div>

      {/* Headline */}
      <h1
        style={{
          fontSize: "clamp(2rem, 6vw, 3.5rem)",
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: "-0.03em",
          marginBottom: "16px",
        }}
      >
        Page not found.
      </h1>

      {/* Sub */}
      <p
        style={{
          fontSize: "1rem",
          color: "rgba(255,255,255,0.4)",
          maxWidth: "400px",
          lineHeight: 1.65,
          marginBottom: "40px",
        }}
      >
        This route doesn&apos;t exist. Head back and describe your prediction
        market strategy.
      </p>

      {/* CTA */}
      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "14px 28px",
          background: "linear-gradient(135deg, #ea580c 0%, #dc2626 100%)",
          borderRadius: "12px",
          fontSize: "0.9375rem",
          fontWeight: 700,
          color: "#fff",
          textDecoration: "none",
          transition: "transform 0.15s ease, box-shadow 0.2s ease",
          letterSpacing: "0.01em",
          position: "relative",
          overflow: "hidden",
        }}
        aria-label="Go back to PredictScript homepage"
      >
        Back to PredictScript
      </Link>

      {/* Footer note */}
      <p
        style={{
          marginTop: "48px",
          fontFamily: "var(--font-mono), monospace",
          fontSize: "0.65rem",
          color: "rgba(255,255,255,0.12)",
          letterSpacing: "0.08em",
        }}
      >
        getpredictscript.com
      </p>
    </div>
  );
}
