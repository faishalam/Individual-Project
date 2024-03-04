export default function CarouselHero() {
    return (
        <>
            <div className="carousel w-full mt-[110px]">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://spaces.ilfen.co/assets/image/produk/083d2b9f-b91d-49ad-bef5-66f2836e5c9d.jpg" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://spaces.ilfen.co/assets/image/produk/e2b8de20-8660-45ca-8e2f-07d58c6db336.jpg" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://spaces.ilfen.co/assets/image/produk/6077fe1c-1373-4d88-b783-0cc996fbb7e6.jpg" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center gap-5 mt-3">
                <div className="bg-black rounded-2xl w-2 h-2"></div>
                <div className="bg-black rounded-2xl w-2 h-2"></div>
                <div className="bg-black rounded-2xl w-2 h-2"></div>
            </div>
        </>
    )
}