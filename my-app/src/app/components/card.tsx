import Link from "next/link";
import WishlistButton from "./wishlistButton";

async function fetchData() {
    'use server'
    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/products/fetch', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-store'
    })
    return await response.json()
}

export default async function CardHome() {
    const data = await fetchData()

    return (
        <>
            <div className="px-3 mx-4 mb-12">

                <div className="flex justify-between my-5">
                    <h1 className="text-2xl font-bold text-black">HOT ITEM</h1>
                    <Link href={'/products'}><button type="button" className="text-sm text-black bg-white border border-black hover:bg-gray-200 rounded-lg px-2.5 py-0.5">
                        <span className="text-md">View All</span>
                    </button></Link>
                </div>
                <div className="grid grid-cols-4 gap-4">

                    {data.slice(0, 8).map((product: any) => (
                        <div className="product-card cursor-pointer" key={product._id}>
                            <div className="product-card-image relative">
                                <Link href={`/products/${product.slug}`} key={product._id}>
                                    <img src={product.thumbnail} className="rounded-lg" alt="" />
                                </Link>

                                <WishlistButton productsId={product._id.toString()} />
                            </div>
                            <div className="flex flex-wrap justify-between">
                                <div className="product-card-detail my-2">
                                    <p className="text-sm font-semibold">{product.name}</p>
                                    <p className="font-md text-[13px] font-medium">S M L XL XXL</p>
                                </div>
                                <div className="product-card-price my-2">
                                    <p className="font-semibold text-right text-[13px] text-black">Rp 250.000</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}