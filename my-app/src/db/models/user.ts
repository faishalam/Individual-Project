import { ObjectId } from "mongodb";
import { getCollection } from "../config/mongodb";
import { hashPassword } from "../helpers/bcrypt";
import { z } from "zod";
import { UserType } from "@/app/type";

type NewUserInput = Omit<UserType, "_id">

const userSchema = z.object({
    name: z.string(),
    username: z.string().nonempty(),
    email: z.string().nonempty().email(),
    password: z.string().min(5).nonempty()
})

const userSchemaLogin = z.object({
    email: z.string().nonempty().email(),
    password: z.string().min(5).nonempty()
})

class UserModel {
    static collection() {
        return getCollection("users")
    }

    static async getAll() {
        return await this.collection().find().toArray() as UserType[]
    }

    static async create(user: NewUserInput) {
        const validation = userSchema.safeParse(user)

        if (!validation.success) {
            throw validation.error
        }

        const result = await this.collection().insertOne({
            ...user,
            password: hashPassword(user.password),
        })

        return {
            _id: result.insertedId,
            ...user,
        } as UserType
    }

    static async findUserEmail(email: string) {
        return (await this.collection().findOne({email: email})) as UserType
    }

    static async findUserUsername(username: string) {
        return (await this.collection().findOne({username: username})) as UserType
    }

}

export default UserModel