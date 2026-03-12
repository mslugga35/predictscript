import { NextRequest, NextResponse } from "next/server";
import { parseStrategy } from "@/lib/strategy-parser";

export async function POST(req: NextRequest) {
  try {
    const { description } = await req.json();

    if (!description || typeof description !== "string" || description.trim().length < 10) {
      return NextResponse.json(
        { error: "Describe your strategy in at least 10 characters" },
        { status: 400 }
      );
    }

    const { config, explanation } = await parseStrategy(description.trim());

    return NextResponse.json({ config, explanation });
  } catch (error) {
    console.error("Parse error:", error);
    const message =
      error instanceof Error ? error.message : "Failed to parse strategy";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
