import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";
import axios from "axios";

import _config from "@/app/config";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const token = request.cookies.get("token")?.value;

  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith("/auth")) {
    if (!token) return NextResponse.next();
    return NextResponse.redirect(new URL(_config.routes.account, request.url));
  }

  if (pathname.startsWith("/account") || pathname === "/cart") {
    if (token) {
      try {
        const { payload } = await jwtVerify(token!, new TextEncoder().encode("jwtSecret"));
      } catch (err: any) {
        if (err.code === "ERR_JWT_EXPIRED") {
          console.log("Token hết hạng");

          const username = request.cookies.get("username")?.value;

          const refresh_token = await axios
            .post(`${_config.api.auth}/refreshtoken`, { username: username })
            .then((response: any) => response.data)
            .catch((err) => {
              console.log(false);
              
              return NextResponse.redirect(new URL(_config.routes.login, request.url));
            });

          const tokenNew = await axios
            .post(`${_config.api.auth}/newtoken`, { refresh_token })
            .then((response: any) => response.data)
            .catch((err) => {
              return NextResponse.redirect(new URL(_config.routes.login, request.url));
            });

          response.cookies.set("token", tokenNew, {
            path: "/",
            maxAge: 60 * 60 * 24,
          });
          response.cookies.set("username", username!, {
            path: "/",
            maxAge: 60 * 60 * 24,
          });

          return response;
        }
        response.cookies.set("token", "", {
          path: "/",
          expires: new Date(0),
        });
        response.cookies.set("username", "", {
          path: "/",
          expires: new Date(0),
        })
        return response;
      }
      return NextResponse.next();
    }

    return NextResponse.redirect(new URL(_config.routes.login, request.url));
  }

  if (pathname.startsWith("/admin")) {
    if (token) {
      try {
        const { payload } = await jwtVerify(token!, new TextEncoder().encode("jwtSecret"));
        const user: any = payload.user;
        if (!user.role) {
          return NextResponse.redirect(new URL(_config.routes.home, request.url));
        }
      } catch (err: any) {
        if (err.code === "ERR_JWT_EXPIRED") {
          console.log("Token hết hạng");

          const username = request.cookies.get("username")?.value;

          const refresh_token = await axios
            .post(`${_config.api.auth}/refreshtoken`, { username: username })
            .then((response: any) => response.data)
            .catch((err) => {
              return NextResponse.redirect(new URL(_config.routes.login, request.url));
            });

          const tokenNew = await axios
            .post(`${_config.api.auth}/newtoken`, { refresh_token })
            .then((response: any) => response.data)
            .catch((err) => {
              return NextResponse.redirect(new URL(_config.routes.login, request.url));
            });

          response.cookies.set("token", tokenNew, {
            path: "/",
            maxAge: 60 * 60 * 24,
          });
          response.cookies.set("username", username!, {
            path: "/",
            maxAge: 60 * 60 * 24,
          });

          return response;
        }
        response.cookies.set("token", "", {
          path: "/",
          expires: new Date(0),
        })
        response.cookies.set("username", "", {
          path: "/",
          expires: new Date(0),
        })
        return response;
      }
      return NextResponse.next();
    }

    return NextResponse.redirect(new URL(_config.routes.login, request.url));
  }

}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/admin/:path*", "/account/:path*", "/auth/:path*", "/cart"],
};
