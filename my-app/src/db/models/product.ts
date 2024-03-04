import { z } from "zod"
import { getCollection } from "../config/mongodb"
import { ProductType } from "@/app/type";

type NewUserInput = Omit<ProductType, "_id">

const productSchema = z.object({
    name: z.string().nonempty(),
    slug: z.string(),
    description: z.string(),
    excerpt: z.string(),
    price: z.number(),
    tags: z.array(z.string()),
    thumbnail: z.string(),
    image: z.array(z.string()),
    createdAt: z.date(),
    updatedAt: z.date(),
})


class ProductModel {
    static collection() {
        return getCollection("products")
    }

    static async getProduct(search: string) {
        const searching = new RegExp(search, 'i')
        console.log(search)
        if(search) {
            return await this.collection().find({name: {$regex: searching}}).toArray()
        }
        return await this.collection().find().toArray() 
    }

    static async getProductBySlug(slug: string) {
        return (await this.collection().findOne({slug})) 
    }
}

export default ProductModel