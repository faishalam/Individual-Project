'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { parseCookies } from 'nookies'
export const dynamic = 'force-dynamic'

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkIsLogin = () => {
        const cookies = parseCookies();

        const authorizationCookie = cookies['Authorization'];

        if (authorizationCookie) {
            setIsLoggedIn(true)
        }
    }

    useEffect(() => {
        checkIsLogin();
    }, []);




    return (
        <>
            <div className="fixed w-full" style={{ zIndex: 100 }}>
                <div className="w-full bg-white flex drop-shadow-sm justify-start alignItems-start border border-b-grey-800">
                    <div className="flex grow justify-center items-center w-1/2 max-w-[200px] h-[36px] laptop:grow-0 hover:border-b hover:border-gray-800 px-2 cursor-pointer text-white bg-[#601303]">
                        <img
                            src="https://preppstudio.com/assets/prepp-studio-5609aeb0.png"
                            className="w-[80px] cursor-pointer"
                            alt=""
                        />
                    </div>

                    <div className="flex grow justify-center items-center w-1/2 max-w-[200px] h-[36px] laptop:grow-0 hover:border-b hover:border-gray-800 px-2 cursor-pointer text-white">
                        <img
                            src="https://preppstudio.com/assets/prepp-jr-black-d59c0731.png"
                            className="w-[80px] cursor-pointer"
                            alt=""
                        />
                    </div>
                </div>
                <nav className="fixed navbar bg-white" style={{ zIndex: 100 }}>
                    <div className="flex-1 gap-[50px]">
                        <Link href="/"><img src="https://preppstudio.com/assets/prepp-studio-5609aeb0.png" className="w-full max-w-[100px] cursor-pointer" alt="" /></Link>
                        <Link href="/products">
                            <p className="text-[13px] font-light uppercase text-black">HOT ITEMS</p>
                        </Link>

                        <Link href="/products">
                            <p className="text-[13px] font-light uppercase text-black">MONOLINE T-SHIRT</p>
                        </Link>

                        <Link href="/about">
                            <p className="text-[13px] font-light uppercase text-black">OUR STORY</p>
                        </Link>
                        
                        <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <form action="" className="relative flex mr-5" data-te-input-wrapper-init>
                            <input
                                type="search"
                                name="search"
                                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="exampleSearch2"
                                placeholder="search"
                            />
                            <label
                                className="text-[13px] font-light uppercase pointer-events-none absolute transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary ml-2 mt-2"
                            >Search________</label>
                            <button type="button"></button>
                        </form>
                        </div>

                    </div>

                    <div className="flex-none gap-5">

                        <button onClick={checkIsLogin}>
                            {!isLoggedIn ? (
                                <Link href={'/login'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                                    </svg>
                                </Link>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-5 text-black">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            )}
                        </button>

                        <Link href={'/wishlists'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5 text-black">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </Link>


                        <Link href={'/wishlists'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-5 text-black">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                        </Link>

                    </div>
                </nav>
            </div>
        </>
    )
}