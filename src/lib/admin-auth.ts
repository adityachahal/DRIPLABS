import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";

const ADMIN_SESSION_COOKIE = "driplabs_admin_session";
const ADMIN_SESSION_MAX_AGE = 60 * 60 * 8; // 8 hours

function getSessionSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET;

  if (!secret) {
    throw new Error("ADMIN_SESSION_SECRET is not configured.");
  }

  return new TextEncoder().encode(secret);
}

export async function createAdminSession() {
  const secret = getSessionSecret();

  const token = await new SignJWT({
    role: "admin",
  })
    .setProtectedHeader({
      alg: "HS256",
    })
    .setIssuedAt()
    .setExpirationTime(`${ADMIN_SESSION_MAX_AGE}s`)
    .setIssuer("driplabs")
    .setAudience("driplabs-admin")
    .sign(secret);

  const cookieStore = await cookies();

  cookieStore.set({
    name: ADMIN_SESSION_COOKIE,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: ADMIN_SESSION_MAX_AGE,
  });

  return token;
}

export async function destroyAdminSession() {
  const cookieStore = await cookies();

  cookieStore.set({
    name: ADMIN_SESSION_COOKIE,
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
}

export async function isAdminAuthenticated() {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;

    if (!session) {
      return false;
    }

    const secret = getSessionSecret();

    const { payload } = await jwtVerify(session, secret, {
      issuer: "driplabs",
      audience: "driplabs-admin",
    });

    return payload.role === "admin";
  } catch {
    return false;
  }
}

export async function requireAdmin() {
  const authenticated = await isAdminAuthenticated();

  if (!authenticated) {
    throw new Error("UNAUTHORIZED");
  }
}