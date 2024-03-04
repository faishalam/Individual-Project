'use client'

import { parseCookies } from "nookies";
import { useState } from "react";
import { Bounce, ToastContainer, toast } from 'react-toastify';

export default function WishlistButtonDetailsProduct({ productsId }: { productsId: string }) {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleOnClick = async (productId: string) => {
        const cookies = parseCookies();
        const authorizationCookie = cookies['Authorization'];

        if (!authorizationCookie) {
            toast.error('Login dulu banggg', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
            setIsLoggedIn(true);
            return
        }

        const response = await fetch(process.env.NEXT_PUBLIC_
         + '/api/wishlists', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            cache: 'no-store',
            body: JSON.stringify(productId),
        });

        if (response.status === 404) {
            toast.error('Udah ada di wishlist!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
            return
        }
        toast.success('Wishlist added', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });

        return await response.json();
    }

    return (
        <>
            <button className="flex items-center justify-center bg-white text-black border rounded-lg font-bold border-black w-[420px] h-[45px] mt-2" onClick={() => handleOnClick(productsId)}>
            ADD TO WISHLIST
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 absolute top-0 right-0 mt-2 mr-2 bg-white rounded-full p-1 cursor-pointer"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                </svg>
            </button>
            <ToastContainer />
        </>
    );
}
