import ModelSparepart from "@/databases/models/spareparts";
import { NextResponse } from "next/server";

type RequestParam = {
    params: {
      id: string;
    };
  };
export async function GET(req: Request, { params }: RequestParam) {
    try {
        const datas = await ModelSparepart.getSparepart(params.id)
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