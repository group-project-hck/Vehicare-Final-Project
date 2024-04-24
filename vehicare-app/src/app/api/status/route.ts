"use server"
import ModelStatus from "@/databases/models/status";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: Request) {
    try {
      const body: {id : string} = await req.json();
      await ModelStatus.addDailyHP(body.id);
      return NextResponse.json(
        { success: `Success add DailyHP Book` },
        { status: 201 }
      );
    } catch (error: any) {
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
    }
  }