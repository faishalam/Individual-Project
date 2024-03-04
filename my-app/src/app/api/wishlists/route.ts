import WishlistModel from "@/db/models/wishlist";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

// export async function GET(request: NextRequest) {
//     try {
//         const result = await WishlistModel.getAll()
//         return Response.json({data : result})
//     } catch (error) {
//         if(error instanceof ZodError) {
//             return NextResponse.json({ error: error.issues[0].message }, { status: 400 })
//         }
//         return NextResponse.json({ error: "Internal server error" }, { status: 500 })
//     }
// }

export async function GET(request: NextRequest) {
    try {
        const idUser = request.headers.get('x-user-id')

        const result = await WishlistModel.getAllWishlists(idUser as string)

        return NextResponse.json({data : result})
    } catch (error) {
        console.log(error)
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const idUser = request.headers.get('x-user-id')
        const newWishlist = {
            productId : body as string,
            userId : idUser || ''
        }

        const result = await WishlistModel.create(newWishlist)
        if(!result) {
            return NextResponse.json({ error: "Udah di Add" }, { status: 404 })
        }

        return NextResponse.json({data : result}, {status : 200})
    } catch (error) {
        if(error instanceof ZodError) {
            console.log(error)
            return NextResponse.json({ error: error.issues[0].message }, { status: 400 })
        }
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const body = await request.json()
        const result = await WishlistModel.deleteWishLists(body)
        return NextResponse.json({data: result}, {status : 200})
    } catch (error) {
        if(error instanceof ZodError) {
            return NextResponse.json({ error: error.issues[0].message }, { status: 400 })
        }
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}