'use client'

import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import Footer from "../components/footer";
import { destroyCookie } from 'nookies';
import { redirect } from "next/navigation";
export const dynamic = 'force-dynamic'


export default function Wishlist() {
    const [wishlists, setWishlists] = useState([])

    const fetchWishlists = async () => {
        try {
            const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/wishlists', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                cache: 'no-store'
            }) as any
            const { data } = await response.json();
            setWishlists(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchWishlists();
    }, []);

    const handleOnDelete = async (wishlistId: string) => {
        try {
            const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/wishlists', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                cache: 'no-store',
                body: JSON.stringify(wishlistId)
            }) as any
            console.log(await response.json());

            if (response.ok) {
                fetchWishlists();
            } else {
                console.log('Failed to delete wishlist item');
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleOnLogout = async () => {
        destroyCookie(null, 'Authorization')
        return redirect('/login')
    }

    return (
        <>
            <Navbar />
            <div className="flex flex-col justify-center items-center pt-[110px]">
                <img src="https://preppstudio.com/assets/mini-logo-35c96f9c.svg" alt="" className="w-[50px] my-2" />
                <p className="font-semibold ">PREPP STUDIO Account</p>
                <p className="font-light text-sm text-[#717171] mb-3">You can manage your account and track your order here</p>
                <div className="relative w-[1200px] h-[1px] bg-gray-300"></div>
            </div>



            <div className="flex w-[1200px] mt-10 mx-[240px]">

                <div className="w-1/3">
                    <div className="flex flex-wrap items-center mt-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                        </svg>

                        <p className="text-md font-semibold text-[#717171] mt-1 ml-3 ">My Order</p>
                    </div>

                    <div className="flex flex-wrap items-center mt-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>

                        <p className="text-md font-semibold text-black mt-1 ml-3">Wishlist</p>
                    </div>

                    <div className="flex flex-wrap items-center mt-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                        </svg>
                        <p className="text-md font-semibold text-[#717171] mt-1 ml-3">Account</p>
                    </div>

                    <div className="flex flex-wrap items-center mt-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <p className="text-md font-semibold text-[#717171] mt-1 ml-3 ">Address</p>
                    </div>

                    <form className="flex flex-wrap items-center mt-5 cursor-pointer">
                        <button onClick={handleOnLogout} type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                            </svg>
                            <p className="text-md font-semibold text-[#717171] mt-1 ml-3">Logout</p>
                        </button>
                    </form>



                </div>

                <div className="w-2/3">
                    <h1 className="text-2xl font-semibold">My Wishlist</h1>
                    <div className="grid grid-cols-4 gap-3 pt-[20px]">
                        {wishlists.map((item: any) => (
                            <div className="product-card cursor-pointer" key={item.productId}>
                                <div className="relative product-card-image">
                                    <img src={item.wishlists.thumbnail} className="rounded-lg" alt="" />
                                    <button onClick={() => handleOnDelete(item._id)} >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" className="w-6 h-6 absolute top-0 right-0 mt-2 mr-2 bg-white rounded-full p-1">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex flex-wrap justify-between">
                                    <div className="product-card-detail my-2">
                                        <p className="text-sm font-semibold text-black">{item.wishlists.name}</p>
                                    </div>
                                    <div className="product-card-price">
                                        <p className="font-semibold text-right text-[13px] text-black">Rp {item.wishlists.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div >

            <Footer />
        </>
    )
}