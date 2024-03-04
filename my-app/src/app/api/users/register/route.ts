import UserModel from "@/db/models/user";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(request: Request) {
    try {
        const body = await request.json();


        const existingUserUsername = await UserModel.findUserUsername(body.username)
        if (existingUserUsername) {
            return NextResponse.json({ error: "Username already exists" }, { status: 400 });
        }
        

        const existingUserEmail = await UserModel.findUserEmail(body.email)
        if (existingUserEmail) {
            return NextResponse.json({ error: "Email already exists" }, { status: 400 });
        }

        const result = await UserModel.create(body)
        return NextResponse.json({ data: result })
    } catch (error) {
        if (error instanceof ZodError) {
            return NextResponse.json({ error: error.issues[0].message }, { status: 400 })
        }
        return NextResponse.json({ error: "Internal server error" }, { status: 500 }
        )
    }
}
