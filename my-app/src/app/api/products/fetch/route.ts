import ProductModel from "@/db/models/product"
import { NextResponse } from "next/server"
import { ZodError } from "zod"
export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
    try {

        const {searchParams} = new URL(request.url)
        const search: string = searchParams.get('search') as string

        const products = await ProductModel.getProduct(search)
        return new Response(JSON.stringify(products), {
            status: 200
        })
    } catch (error) {
        if(error instanceof ZodError) {
            return NextResponse.json({ error: error.issues[0].message }, { status: 400 })
        }
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}