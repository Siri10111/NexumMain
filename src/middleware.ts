import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const isMaintenance = process.env.NEXT_PUBLIC_MAINTENANCE === "true";
  if (!isMaintenance) return NextResponse.next();

  const url = new URL(req.url);

  // Allow the maintenance page and any health checks to pass
  if (url.pathname.startsWith("/maintenance") || url.pathname.startsWith("/api/health")) {
    return NextResponse.next();
  }

  // Redirect everything else to /maintenance
  url.pathname = "/maintenance";
  return NextResponse.redirect(url);
}

// Skip static assets and Next internals
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
};
