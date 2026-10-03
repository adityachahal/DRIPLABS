import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const ADMIN_SESSION_COOKIE = "driplabs_admin_session";

function getSessionSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET;

  if (!secret) {
    return null;
  }

  return new TextEncoder().encode(secret);
}

async function isValidAdminSession(token: string | undefined) {
  if (!token) {
    return false;
  }

  const secret = getSessionSecret();

  if (!secret) {
    return false;
  }

  try {
    const { payload } = await jwtVerify(token, secret, {
      issuer: "driplabs",
      audience: "driplabs-admin",
    });

    return payload.role === "admin";
  } catch {
    return false;
  }
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isAdminRoute = pathname.startsWith("/admin");
  const isLoginRoute = pathname === "/admin/login";

  // Allow everything outside /admin
  // and allow the login page itself.
  if (!isAdminRoute || isLoginRoute) {
    return NextResponse.next();
  }

  const adminSession = request.cookies.get(
    ADMIN_SESSION_COOKIE,
  )?.value;

  const authenticated = await isValidAdminSession(adminSession);

  if (!authenticated) {
    const loginUrl = new URL("/admin/login", request.url);

    loginUrl.searchParams.set(
      "redirect",
      pathname,
    );

    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};