import ModelVehicle from "@/databases/models/vehicles";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string } }) {
    try {
        const getData = await ModelVehicle.findVehicle(params.id)
        if (!getData) throw { name: "invalid" }

        return NextResponse.json(
            { data: getData },
            { status: 200 }
        )
    } catch (error: any) {
        if (error.name === "invalid") {
            return NextResponse.json(
                { error: "Data not found" },
                { status: 404 }
            )
        }
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        )
    }
}