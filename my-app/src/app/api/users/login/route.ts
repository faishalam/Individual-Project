import { comparePassword } from "@/db/helpers/bcrypt";
import { createToken } from "@/db/helpers/jwt";
import UserModel from "@/db/models/user";
import { NextResponse } from "next/server";
import { ZodError } from "zod";


export async function POST(request: Request) {
    try {
        const body = await request.json()

        const existingUserEmail = await UserModel.findUserEmail(body.email)
        if (!existingUserEmail) {
            return NextResponse.json({ error: "Email not found" }, { status: 400 });
        }

        const passwordChecking = comparePassword(body.password, existingUserEmail.password)

        if(!passwordChecking) {
            return NextResponse.json({message : 'Email / password wrong'}, {status: 401})
        }

        const payload = {
            _id: existingUserEmail._id,
            email: existingUserEmail.email,
        }

        const token = createToken(payload) 
        return NextResponse.json({
            message : 'Login Success',
            data : {
                accessToken: token
            }
        },{
            status: 201,
        })
    } catch (error) {
        if (error instanceof ZodError) {
            return NextResponse.json({ error: error.issues[0].message }, { status: 400 })
        }
        return NextResponse.json({ error: "Internal server error" }, { status: 500 }
        )
    }
}