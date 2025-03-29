import { NextResponse, type NextRequest } from "next/server";
import { User, Role } from "@/components/Types";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const userCookie = request.cookies.get("user");
  const user: User | undefined = userCookie
    ? JSON.parse(userCookie.value)
    : undefined;
  if (user && user.role === Role.admin) {
    return response;
  } else {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/api/admin/:path*", "/admin/:path*"],
};
