import serviceBooksModel from "@/databases/models/servicebook";
import ModelStatus from "@/databases/models/status";
import { NextResponse } from "next/server";

type RequestParam = {
  params: {
    id: string;
  };
};
export async function PATCH(req: Request, { params }: RequestParam) {
  try {
    const body = await req.json();
    const status = await ModelStatus.ChangeGatcha(params.id, body);
    return NextResponse.json({ data: status }, { status: 200 });
  } catch (error: any) {
    if (error.message === "Gatcha is already used") {
      return NextResponse.json({ error: "Gatcha is already used" }, { status: 400 });
    }
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
