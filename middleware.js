import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export default async function middleware(req) {
  const cookieStore = await cookies();
  cookieStore.set("middleware-cookie", "active", {
    httpOnly: true,
  });
  //   return NextResponse.redirect(new URL("/", req.url));
  //   if (req.nextUrl.pathname.startsWith("/profile")) {
  //     return NextResponse.redirect(new URL("/api-test", req.url));
  //   }
  return NextResponse.next();
}

// export const config = {
//   matcher: ["/profile"],
// };
