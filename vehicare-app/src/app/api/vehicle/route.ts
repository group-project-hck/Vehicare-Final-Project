import ModelStatus from "@/databases/models/status";
import ModelVehicle from "@/databases/models/vehicles";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    body.UserId = req.headers.get("x-user-id") as string;
    const res = await ModelVehicle.addVehicle(body);
    await ModelStatus.addStatus(res.insertedId);
    return NextResponse.json(
      { success: `Success added vehicle` },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
