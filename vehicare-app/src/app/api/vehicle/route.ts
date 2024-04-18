
import ModelStatus from "@/databases/models/status";
import ModelVehicle from "@/databases/models/vehicles";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json()
        body.UserId = "6620cea3918910ac27d8e7b0" //example
        const res = await ModelVehicle.addVehicle(body)

        // Default Status
        await ModelStatus.addStatus(res.insertedId)

        return NextResponse.json(
            { success: `Success added vehicle` },
            { status: 201 }
        )
    } catch (error: any) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        )
    }
}