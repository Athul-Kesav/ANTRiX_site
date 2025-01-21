import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Detect mobile devices based on the User-Agent header
const isMobile = (userAgent: string) => {
    return /Mobile|Android|iP(hone|od|ad)/.test(userAgent);
};

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();
    const userAgent = request.headers.get("user-agent") || "";
    const path = url.pathname;

    // Check if the request is from a mobile device
    const mobile = isMobile(userAgent);

    // If mobile and not in /mobile route, redirect to /mobile version
    if (mobile && !path.startsWith("/mobile")) {
        url.pathname = `/mobile${path === "/" ? "" : path}`;
        return NextResponse.redirect(url);
    }

    // If not mobile and in /mobile route, redirect to normal route
    if (!mobile && path.startsWith("/mobile")) {
        url.pathname = path.replace("/mobile", "") || "/";
        return NextResponse.redirect(url);
    }

    return NextResponse.next(); // Continue with normal response
}
