'use client'
import { ProductType } from "../type"
import WishlistButtonDetailsProduct from "./wishlistButtonDetailsProducts"
export const dynamic = 'force-dynamic'
export default async function CarouselDetailsProduct({ data }: { data: ProductType }) {


    return (
        <>
            <div className="flex pt-[110px]">
                <div className="carousel w-2/3 h-[810px] gap-2 flex rounded-lg mx-2 ml-8">

                    {
                        data.images.map((image: string, idx: number) => (
                            <div className="carousel-item w-1/2" key={idx}>
                                <img src={image} className="w-full rounded-lg" />

                            </div>
                        ))
                    }
                </div>

                <div className="w-1/3 flex flex-col justify-start">
                    <div className="mx-8">
                        <h1 className="font-semibold text-left text-lg mb-2 text-black">{data.name}</h1>
                        <span className="font-semibold text-left text-lg text-black">Rp. {data.price}</span>
                        <p className="font-light text-sm mb-3 text-black">Select Size</p>

                        <div className="flex gap-3">
                            <div className="bg-white border border-gray-300 rounded-lg text-black p-2 w-fit min-w-[44px] text-center flex justify-center items-center">
                                <span>S</span>
                            </div>

                            <div className="bg-white border border-gray-300 rounded-lg text-black p-2 w-fit min-w-[44px] text-center flex justify-center items-center">
                                <span>M</span>
                            </div>

                            <div className="bg-white border border-gray-300 rounded-lg text-black p-2 w-fit min-w-[44px] text-center flex justify-center items-center">
                                <span>L</span>
                            </div>

                            <div className="bg-white border border-gray-300 rounded-lg text-black p-2 w-fit min-w-[44px] text-center flex justify-center items-center">
                                <span>XL</span>
                            </div>

                            <div className="bg-white border border-gray-300 rounded-lg text-black p-2 w-fit min-w-[44px] text-center flex justify-center items-center">
                                <span>XXL</span>
                            </div>
                        </div>

                        <div>
                            <button className="bg-black text-white w-full font-bold rounded-lg h-[48px] mt-5">ADD TO BAG</button>
                            <div className="flex flex-row gap-5">
                            <WishlistButtonDetailsProduct productsId={data._id} />
                                

                                <button className="flex items-center justify-center bg-white text-black border rounded-lg font-bold border-black w-[90px] h-[45px] mt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div>

                            <p className="font-light text-sm py-5 ml-5 text-black">Details</p>
                            <div className="relative w-full h-[1px] bg-gray-300">
                                <div className="absolute w-[90px] bg-black h-[5px] bot-0"></div>
                            </div>

                            <p className="text-sm py-5 font-semibold text-[#717171]">{data.name}</p>
                            <p className="text-sm py-5 font-light mb-5 text-[#717171]">Material : {data.excerpt}</p>

                            <ul>
                                <li className="text-sm text-[13px] font-light text-[#717171]">Fitur : </li>
                                <li className="text-sm text-[13px] font-light text-[#717171]">-Round neck collar.</li>
                                <li className="text-sm text-[13px] font-light text-[#717171]">-Rib-trimmed neckline.</li>
                                <li className="text-sm text-[13px] font-light text-[#717171]">-Faux layering shirts.</li>
                                <li className="text-sm text-[13px] font-light text-[#717171]">-Relaxed fit.</li>
                                <li className="text-sm text-[13px] font-light text-[#717171]">-Straight-cut hem.</li>
                            </ul>

                            <ul className="py-5">
                                <li className="text-sm text-[13px] font-light text-[#717171]">Overview :</li>
                                <li className="text-sm text-[13px] font-light text-[#717171]">-Machine washable.</li>
                            </ul>

                            <ul className="py-5">
                                <li className="text-sm font-semibold text-[#717171]">Size Chart</li>
                                <li className="text-sm text-[13px] font-light text-[#717171]">Body Length x Chest x Shoulder</li>
                                <li className="text-sm text-[13px] font-light text-[#717171]">S : 66 cm x 52 cm x 50 cm</li>
                                <li className="text-sm text-[13px] font-light text-[#717171]">M : 68 cm x 54 cm x 52 cm</li>
                                <li className="text-sm text-[13px] font-light text-[#717171]">L : 70 cm x 56 cm x 54 cm</li>
                                <li className="text-sm text-[13px] font-light text-[#717171]">XL : 72 c, x 58 cm x 54 cm</li>
                                <li className="text-sm text-[13px] font-light text-[#717171]">XXL : 74 cm x 60 cm x 56 cm</li>
                                <li className="text-sm text-[13px] font-light text-[#717171]">Toleransi size hingga ± 1 cm</li>
                            </ul>

                            <ul className="py-5">
                                <li className="text-sm font-semibold text-[#717171]">Talent</li>
                                <li className="text-sm text-[13px] font-light text-[#717171]">Tinggi : 180 cm</li>
                                <li className="text-sm text-[13px] font-light text-[#717171]">Berat : 65 kg</li>
                                <li className="text-sm text-[13px] font-light text-[#717171]">Menggunakan Size L</li>
                                <li className="text-sm text-[13px] font-light text-[#717171]">{data.description}</li>

                            </ul>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}