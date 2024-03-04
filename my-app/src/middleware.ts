import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { readPayloadJose } from "./db/helpers/jwt";

export async function middleware(request: Request) {
    let token = cookies().get('Authorization')?.value.split(' ')[1]

    const requestHeaders = new Headers(request.headers)

    if(token) {
        const decodeUser = await readPayloadJose<{_id: string, email: string}>(token)

        const requestHeaders = new Headers(request.headers)
        requestHeaders.set('x-user-id', decodeUser._id)
        requestHeaders.set('x-user-email', decodeUser.email)

        const response = NextResponse.next({
            request : {
                headers : requestHeaders
            }
        })
        return response

    }
    return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
    matcher: ["/api/wishlists/", '/wishlists']
}