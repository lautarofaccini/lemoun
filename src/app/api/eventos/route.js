import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";

export async function GET() {
    try {
      var data
      data = {
        hola: "hola mundo"
      }
  
      return NextResponse.json(data);
    } catch (error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }