import ModelSparepart from "@/databases/models/spareparts";
import UserModel from "@/databases/models/users";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const userId = req.headers.get("x-user-id") as string;
    const datas = await UserModel.myProfile(userId);
    return NextResponse.json({ data: datas }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
