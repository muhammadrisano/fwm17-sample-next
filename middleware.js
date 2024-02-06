import { NextResponse } from "next/server";

const isLogin = true
export function middleware(request) {
  console.log('test middle dijalankan');
  // if (request.nextUrl.pathname.startsWith("/main")) {
    // if(!isLogin){
    //   return NextResponse.redirect(new URL("/auth/login", request.url));
    // }
  // }
  
}

export const config = {
  matcher: ['/main/:path*'],
}
