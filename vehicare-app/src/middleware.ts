import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { Payload } from "./databases/models/types";
import { readPayloadJose } from "./databases/helpers/jwt";

export async function middleware(request: NextRequest) {
  let login = cookies().get("Authorization");
  if (
    request.nextUrl.pathname.startsWith("/api/servicebook") ||
    request.nextUrl.pathname.startsWith("/api/servicebook/:path*") ||
    request.nextUrl.pathname.startsWith("/api/vehicle/:path*") ||
    request.nextUrl.pathname.startsWith("/api/vehicle") ||
    request.nextUrl.pathname.startsWith("/api/spareparts") ||
    request.nextUrl.pathname.startsWith("/api/spareparts/:path*") ||
    request.nextUrl.pathname.startsWith("/api/status") ||
    request.nextUrl.pathname.startsWith("/api/status/:path*") ||
    request.nextUrl.pathname.startsWith("/api/user") ||
    request.nextUrl.pathname.startsWith("/api/upload") ||
    request.nextUrl.pathname.startsWith("/api/notification") 

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
  } else if (
    request.nextUrl.pathname.startsWith("/login") ||
    request.nextUrl.pathname.startsWith("/register")
  ) {
    if (login) {
      request.nextUrl.pathname = "/";
      return NextResponse.redirect(request.nextUrl);
    }
  } else if (
    request.nextUrl.pathname.startsWith("/") ||
    request.nextUrl.pathname.startsWith("/profile") ||
    request.nextUrl.pathname.startsWith("/spareparts") ||
    request.nextUrl.pathname.startsWith("/history")
  ) {
    if (!login) {
      request.nextUrl.pathname = "/login";
      return NextResponse.redirect(request.nextUrl);
    }
  }
}

export const config = {
  matcher: [
    "/api/servicebook",
    "/api/servicebook/:path*",
    "/api/vehicle/:path*",
    "/api/vehicle",
    "/api/spareparts",
    "/api/spareparts/:path*",
    "/api/status",
    "/api/status/:path*",
    "/api/user",
    "/api/upload",
    "/api/notification",
    "/",
    "/login",
    "/history",
    "/profile",
    "/spareparts"
  ],
};
