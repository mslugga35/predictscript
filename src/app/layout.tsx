import type { Metadata } from "next";
import { Outfit, Fira_Code } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "PredictScript — Natural Language Prediction Market Strategies",
  description:
    "Describe your Kalshi or Polymarket trading strategy in plain English. We turn it into a working bot with backtesting and risk controls.",
  metadataBase: new URL("https://getpredictscript.com"),
  openGraph: {
    title: "PredictScript — Natural Language Prediction Market Strategies",
    description:
      "Describe your trading strategy in plain English. We build the bot.",
    url: "https://getpredictscript.com",
    siteName: "PredictScript",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PredictScript — Plain English to Prediction Market Bot",
    description:
      "Describe your Kalshi or Polymarket strategy. We turn it into executable code with risk controls.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${firaCode.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
