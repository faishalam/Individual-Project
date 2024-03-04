import Link from "next/link";
export const dynamic = 'force-dynamic'

export default function Footer() {
    return (
        <footer className="flex flex-col bg-[#601303] p-10 mt-20">
            <div className="justify-center items-center">
                <h1 className="text-center text-white text-lg leading-6 tracking-0.12 font-bold mb-2">PREPP STUDIO</h1>
            </div>
            <div className="justify-center text-center my-10">
                <Link href="/login" className="text-sm bg-[#601303] border border-whote hover:bg-gray-200 rounded-lg px-2.5 py-0.5 h-8">
                    <span className="text-md text-white">SIGN UP</span>
                </Link>
            </div>

            <div className="footer grid-col-4 text-neutral-content justify-center gap-[150px] h-[250px] mt-10">
                <nav className="flex flex-col justify-center items-center">
                    <header className="text-base mb-2 font-bold text-white">Shop</header>
                    <a className="text-sm font-light text-white">Hot Items</a>
                    <a className="text-sm font-light text-white">Monolight T-shirt</a>
                    <a className="text-sm font-light text-white">Heylocal</a>
                    <a className="text-sm font-light text-white">Heymale</a>
                    <a className="text-sm font-light text-white">Zoma Basic</a>
                    <a className="text-sm font-light text-white">Boonaboo</a>
                </nav>

                <nav className="flex flex-col justify-center items-center">
                    <header className="text-base mb-2 font-bold text-white">About Prepp Studio</header>
                    <Link href="/about" className="text-sm font-light text-white">Our Story</Link>
                    <a className="text-sm font-light text-white">Article</a>
                </nav>

                <nav className="flex flex-col justify-center items-center">
                    <header className="text-base mb-2 font-bold text-white">Payment</header>
                    <a className="text-sm font-light text-white">Bank BCA</a>
                    <a className="text-sm font-light text-white">Bank Mandiri</a>
                    <a className="text-sm font-light text-white">Bank BRI</a>
                    <a className="text-sm font-light text-white">Bank BNI</a>
                    <a className="text-sm font-light text-white">Bank Permata</a>
                    <a className="text-sm font-light text-white">Shopee Pay</a>
                </nav>

                <nav className="flex flex-col justify-center items-center">
                    <header className="text-base mb-2 font-bold text-white">Help</header>
                    <a className="text-sm font-light text-white">FAQ</a>
                </nav>
            </div>

            <div className="justify-center items-center">
                <h1 className="text-center text-white text-sm leading-6 tracking-0.12 font-light mb-2">Ultimate Everyday Wear</h1>
                <h1 className="text-center text-white text-sm leading-6 tracking-0.12 font-light mb-2">Copyright © PREPP STUDIO. All Right Reserved</h1>
            </div>
        </footer>
    )
}