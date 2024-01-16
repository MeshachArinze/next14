import { NextResponse } from "next/server";

export async function GET(request: Request) {

  const responseJson = NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  const responseRedirect = NextResponse.redirect(new URL("/new", request.url));
  return { responseJson, responseRedirect}
}
