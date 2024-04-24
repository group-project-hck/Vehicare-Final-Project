import serviceBooksModel from "@/databases/models/servicebook";
import { ServiceBooks } from "@/databases/models/types";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body: ServiceBooks = await req.json();
    body.SparepartId = body.SparepartId.map((item) => new ObjectId(item));
    body.VehicleId = new ObjectId(body.VehicleId);
    await serviceBooksModel.addServiceBooks(body);
    return NextResponse.json(
      { success: `Success add Service Book` },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
