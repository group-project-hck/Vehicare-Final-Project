import ModelSparepart from "@/databases/models/spareparts";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const datas = await ModelSparepart.allSparepart()
        return NextResponse.json(
            { data: datas },
            { status: 200 }
        )
    } catch (error: any) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        )
    }
}