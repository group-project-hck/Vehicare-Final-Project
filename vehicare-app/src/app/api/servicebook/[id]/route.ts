import serviceBooksModel from "@/databases/models/servicebook";
import { NextResponse } from "next/server";

type RequestParam = {
  params: {
    id: string;
  };
};
export async function GET(req: Request, { params }: RequestParam) {
  try {
    const serviceBooks = await serviceBooksModel.detailServiceBook(params.id);
    return NextResponse.json({ data: serviceBooks }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
