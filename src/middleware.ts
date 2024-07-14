import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname === "/profile") {
        console.log(request.url, "url")
        return NextResponse.rewrite(new URL("/about", request.url))
        //return NextResponse.redirect(new URL("/hello", request.url))
    }
    // return NextResponse.redirect(new URL("/", request.url))
}

// Middleware match using matcher config
// export const config = {
//     matcher: "/profile"
// }