import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const adminSession = request.cookies.get("driplabs_admin_session");

  if (!adminSession) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/bookings/:path*"],
};
