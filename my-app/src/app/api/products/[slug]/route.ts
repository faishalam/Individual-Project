import ProductModel from "@/db/models/product";
import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { MyResponse, ProductType } from "@/app/type";
export const dynamic = 'force-dynamic'

export async function GET(request: Request, { params }: { params: { slug: string } }) {
    try {
        const product = await ProductModel.getProductBySlug(params.slug);

        return NextResponse.json({data: product});
    } catch (error) {
        if(error instanceof ZodError) {
            return NextResponse.json({ error: error.issues[0].message }, { status: 400 })
        }
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}