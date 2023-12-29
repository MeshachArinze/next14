import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === "/") {
    const session = await getToken({
      secret: process.env.JWT_SECRET,
      secureCookie: process.env.NODE_ENV === "production",
      req,
    });
    // You could also check for any property on the session object,
    // like role === "admin" or name === "John Doe", etc.
    if (!session) return NextResponse.redirect("/home");
    // If user is authenticated, continue.
  }
} 
