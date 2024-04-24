import serviceBooksModel from "@/databases/models/servicebook";
import ModelStatus from "@/databases/models/status";
import { NextResponse } from "next/server";

type RequestParam = {
  params: {
    id: string;
  };
};
export async function GET(req: Request, { params }: RequestParam) {
  try {
    const status = await ModelStatus.ChangeGatcha(params.id);
    return NextResponse.json({ data: status }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
