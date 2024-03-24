import { NextRequest } from "next/server";
import { updateSession } from "./lib/auth";

export async function middleware( request: NextRequest) {
    //const session = request.cookies.get('session')?.value;

    /*if(!session && request.nextUrl.pathname.startsWith('/chat')){
        return Response.redirect(new URL('/', request.url))
    }*/

    return await updateSession(request);
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
  }