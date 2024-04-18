import bcryptPass from "@/databases/helpers/bcrypt";
import { Tokenjwt } from "@/databases/helpers/jwt";
import UserModel from "@/databases/models/users";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.username) throw new Error("Username is required");
    if (!body.password) throw new Error("Password is required");
    let user = await UserModel.findUserByUsername(body.username);
    if (!user) {
      user = await UserModel.findUserByEmail(body.username);
      if (!user) throw new Error("Invalid username or password");
    }
    const isValid = bcryptPass.comparePassword(body.password, user.password);
    if (!isValid) throw new Error("Invalid username or password");
    const token = Tokenjwt.genToken({
      _id: user._id.toString(),
      email: user.email,
      username: user.username,
    });
    cookies().set("Authorization", `Bearer ${token}`);
    return Response.json(
      {
        data: { token: token },
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({ message: error.message }, { status: 400 });
    } else {
      return Response.json(
        { error: error, message: "Internal Server Error" },
        { status: 500 }
      );
    }
  }
}
