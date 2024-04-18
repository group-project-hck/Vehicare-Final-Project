import ModelVehicle, { NewVehicle } from "@/databases/models/vehicles";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body: NewVehicle = await req.json()
        body.UserId = "66205baa00e90f1456a9bf0b" //example
        await ModelVehicle.addVehicle(body)

        return NextResponse.json(
            { success: `Success add vehicle` },
            { status: 201 }
        )
    } catch (error: any) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        )
    }
}