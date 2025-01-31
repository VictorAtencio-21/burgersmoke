import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("auth_token")?.value;

  // Define public routes that don't require redirection
  const publicRoutes = ["/home", "/cart", "/menu", "/checkout", "/login", "/contact"];

  // Check if the route is already /home or a public route
  if (pathname === "/home" || publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // Redirect root to /home
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  // Optional: Authentication-based redirection
  if (!token) {
    // If no authentication token, redirect to login
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// Specify which routes this middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - api routes
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
