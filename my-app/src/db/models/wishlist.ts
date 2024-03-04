import { ObjectId } from "mongodb";
import { getCollection } from "../config/mongodb";
import { WishlistType } from "@/app/type";


type NewWishListInput = Omit<WishlistType, "_id">

class WishlistModel {
    static collection() {
        return getCollection('wishlists');
    }

    static async getAll() {
        return await this.collection().find().toArray() as WishlistType[]
    }

    static async create(payload: {userId: string, productId: string}) {
        const newWishlist = {
            userId : new ObjectId(payload.userId),
            productId : new ObjectId(payload.productId),
            createdAt : new Date(),
            updatedAt : new Date()
        }


        const check = await this.collection().find({productId : new ObjectId(payload.productId)}).toArray()

        if(!check.length) {
            const result = await this.collection().insertOne(newWishlist)

            return {
                _id: result.insertedId,
                ...newWishlist
            } as WishlistType}
    }

    static async getAllWishlists(userId:string) {
        return await this.collection().aggregate([
            {
              '$match': {
                'userId': new ObjectId(userId)
              }
            }, {
              '$lookup': {
                'from': 'users', 
                'localField': 'userId', 
                'foreignField': '_id', 
                'as': 'user'
              }
            }, {
              '$unwind': {
                'path': '$user'
              }
            }, {
              '$lookup': {
                'from': 'products', 
                'localField': 'productId', 
                'foreignField': '_id', 
                'as': 'wishlists'
              }
            }, {
              '$unwind': {
                'path': '$wishlists'
              }
            }
          ]).toArray()
    }

    static async deleteWishLists(_id: any) {
        const objectId = new ObjectId(_id);
        return await this.collection().deleteOne({ _id: objectId });
    }
}

export default WishlistModel