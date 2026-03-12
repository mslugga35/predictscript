import { NextRequest, NextResponse } from "next/server";
import { parseStrategy } from "@/lib/strategy-parser";

// Simple in-memory rate limiter: 5 requests per minute per IP
const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

const MAX_DESCRIPTION_LENGTH = 1000;

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Rate limit exceeded. Try again in a minute." },
        { status: 429 }
      );
    }

    const { description } = await req.json();

    if (!description || typeof description !== "string" || description.trim().length < 10) {
      return NextResponse.json(
        { error: "Describe your strategy in at least 10 characters" },
        { status: 400 }
      );
    }

    if (description.length > MAX_DESCRIPTION_LENGTH) {
      return NextResponse.json(
        { error: `Description must be under ${MAX_DESCRIPTION_LENGTH} characters` },
        { status: 400 }
      );
    }

    const { config, explanation } = await parseStrategy(description.trim());

    return NextResponse.json({ config, explanation });
  } catch (error) {
    console.error("Parse error:", error);
    return NextResponse.json(
      { error: "Failed to parse strategy" },
      { status: 500 }
    );
  }
}
