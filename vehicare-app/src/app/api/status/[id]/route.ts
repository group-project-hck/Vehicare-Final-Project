import serviceBooksModel from "@/databases/models/servicebook";
import ModelStatus from "@/databases/models/status";
import { NextResponse } from "next/server";

type RequestParam = {
  params: {
    id: string;
  };
};
export async function POST(req: Request, { params }: RequestParam) {
  try {
    const body = await req.json();
    const status = await ModelStatus.ChangeGatcha(params.id, body);
    return NextResponse.json({ data: status }, { status: 200 });
  } catch (error: any) {
    console.log(error);
    
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
