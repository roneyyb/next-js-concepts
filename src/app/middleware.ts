import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    return NextResponse.redirect(new URL("/", request.url))
}

// Middleware match using matcher config
export const config = {
    matcher: "/profile"
}