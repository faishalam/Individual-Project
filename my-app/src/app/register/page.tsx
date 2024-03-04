import Link from "next/link";
import { redirect } from "next/navigation";
export const dynamic = 'force-dynamic'
export default function Register() {

    const handleOnRegister = async (formData: FormData) => {
        'use server'
        const rawFormData = {
            name : formData.get('name'),
            username : formData.get('username'),
            email : formData.get('email'),
            password : formData.get('password')
        }

        const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                    // 'Accept': 'application/json',
            },
            body: JSON.stringify(rawFormData),
            cache : 'no-store'
            
        })

        
        if(response.ok) {
            return redirect('/login')
        }

        return redirect('/register')
    }
  
   

    return (
        <section className="relative flex flex-wrap lg:h-screen lg:items-center bg-white">
            <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl text-black">Get started today!</h1>

                    <p className="mt-4 text-gray-500">
                        Your style, your way. Experience personalized service that caters to your unique fashion needs. Our team is dedicated to helping you express your individuality.
                    </p>
                </div>

                <form action={handleOnRegister} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                    <div>
                        <label htmlFor="name" className="sr-only">Name</label>

                        <div className="relative">
                            <input
                                name="name"
                                type="name"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter your name"
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="username" className="sr-only">Username</label>

                        <div className="relative">
                            <input
                                name="username"
                                type="username"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter your username"
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>


                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>

                        <div className="relative">
                            <input
                                name="email"
                                type="email"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter email"
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>

                        <div className="relative">
                            <input
                                name="password"
                                type="password"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter password"
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div className="justify-center items-center ">
                        <div className="">
                            <p className="text-sm text-gray-500 text-start mt-6">
                                Forgot your password?
                            </p>
                            <button
                                type="submit"
                                className="inline-block rounded-lg bg-black px-5 py-3 text-sm font-medium text-white w-full mt-4"
                            >
                                Register
                            </button>
                            <p className="text-sm text-gray-500 text-center mt-4">
                                Already have an account ?
                                <Link className="underline" href="/login"> Sign in</Link>
                            </p>
                        </div>
                    </div>

                </form>
            </div>


            <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                <img
                    alt="Welcome"
                    src="https://spaces.ilfen.co/assets/image/produk/ARMY_21.jpg"
                    className="absolute inset-0 h-full w-full object-cover object-top"
                />
            </div>


        </section>
    )
}