import ModelNotification from "@/databases/models/notification";
import { NextResponse } from "next/server";

export async function GET(
  req: Request) {
  try {
    const userId = req.headers.get("x-user-id") as string;
    const getData = await ModelNotification.getNotification(userId);
    return NextResponse.json({ data: getData }, { status: 200 });
  } catch (error: any) {
    if (error.name === "invalid") {
      return NextResponse.json({ error: "Data not found" }, { status: 404 });
    }
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
