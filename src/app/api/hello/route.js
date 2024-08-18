import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";

export async function GET() {
  const res = await conn.query("SELECT NOW()");
  return NextResponse.json({ message: res[0]['NOW()'] });
}
