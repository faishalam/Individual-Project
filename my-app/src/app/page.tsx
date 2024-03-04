import About from "./about/page"
import CardHome from "./components/card"
import CarouselHero from "./components/carouselHero"
import Footer from "./components/footer"
import Navbar from "./components/navbar"

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <CarouselHero />
        <CardHome />
        
        <div>
          <img src="https://spaces.ilfen.co/assets/image/produk/8d31f2e5-ab51-4cc5-9a8a-e047cdf25672.jpg" className="w-full h-auto cursor-pointer" alt="" />
        </div>
      </div>
      <Footer/>
    </>
  )
}