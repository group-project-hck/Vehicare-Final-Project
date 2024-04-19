import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { Payload } from "./databases/models/types";
import { readPayloadJose } from "./databases/helpers/jwt";

export async function middleware(request: NextRequest) {
  let login = cookies().get("Authorization");
  if (
    request.nextUrl.pathname.startsWith("/api/servicebook") ||
    request.nextUrl.pathname.startsWith("/api/vehicle/:path*") ||
    request.nextUrl.pathname.startsWith("/api/vehicle") ||
    request.nextUrl.pathname.startsWith("/api/spareparts") ||
    request.nextUrl.pathname.startsWith("/api/status")
  ) {
    if (!login) {
      return NextResponse.json(
        {
          errMessage: "Invalid Login",
        },
        {
          status: 401,
        }
      );
    }

    const { value } = login;
    const token = value.split(" ")[1];
    const newHeaders = new Headers(request.headers);

    const result: Payload = await readPayloadJose(token);
    newHeaders.set("x-user-id", result._id);
    newHeaders.set("x-user-email", result.email);
    newHeaders.set("x-user-username", result.username);
    newHeaders.set("x-user-role", result.role);
    return NextResponse.next({
      request: {
        headers: newHeaders,
      },
    });
  } else if (request.nextUrl.pathname.startsWith("/")) {
    if (!login) {
      request.nextUrl.pathname = "/login";
      return NextResponse.redirect(request.nextUrl);
    }
  } else if (
    request.nextUrl.pathname.startsWith("/login") ||
    request.nextUrl.pathname.startsWith("/register")
  ) {
    if (login) {
      request.nextUrl.pathname = "/";
      return NextResponse.redirect(request.nextUrl);
    }
  }
}

export const config = {
  matcher: [
    "/api/servicebook",
    "/api/vehicle/:path*",
    "/api/vehicle",
    "/api/spareparts",
    "/api/status",
    "/login",
    "/register",
  ],
};