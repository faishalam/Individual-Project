import Footer from "../components/footer"
import Navbar from "../components/navbar"
export const dynamic = 'force-dynamic'


export default function About() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col justify-center items-center pt-[110px]">
                <img src="https://preppstudio.com/assets/mini-logo-35c96f9c.svg" alt="" className="w-[50px] my-2" />
                <p className="font-semibold ">PREPP STUDIO</p>
                <p className="font-light text-sm text-[#717171] mb-3">You can manage your account and track your order here</p>
                <div className="relative w-[1200px] h-[1px] bg-gray-300"></div>
            </div>

            <div className="flex flex-col justify-center align-center mx-[250px] pt-[10px]">
                <div className="text-center my-5 ">
                    <h1 className="font-bold text-black text-[22px]">About us</h1>
                    <h2>Welcome to Prepp Studio, where fashion meets functionality in the realm of Ultimate Everyday Wear. Established with a commitment to redefine contemporary style, Prepp Studio is a brand that seamlessly blends comfort, versatility, and trendsetting designs to elevate your daily wardrobe. At Prepp Studio, we believe that fashion should effortlessly accompany you in every aspect of your life. Our mission is to provide individuals with a wardrobe that transcends the boundaries between casual and sophisticated, allowing you to embrace your unique style with confidence.</h2>
                </div>

                <div className="text-center my-5">
                    <h1 className="font-semibold text-black text-[18px]">Our Vision:</h1>
                    <h2>To be the go-to destination for those who seek a perfect fusion of style and comfort, creating a lasting impression in every moment of their everyday lives.</h2>
                </div>

                <div className="text-center my-5">
                    <h1 className="font-semibold text-black text-[18px]">The Essence of Ultimate Everyday Wear:</h1>
                    <h2>Our collections are meticulously curated to embody the essence of Ultimate Everyday Wear. We understand the demands of modern life, and our designs are tailored to meet those needs without compromising on style. From comfortable loungewear to chic ensembles for various occasions, Prepp Studio offers a diverse range of apparel that effortlessly transitions from day to night.</h2>
                </div>

                <div className="text-center my-5">
                    <h1 className="font-semibold text-black text-[18px]">Connect with Us:</h1>
                    <h2>Our collections are meticulously curated to embody the essence of Ultimate Everyday Wear. We understand the demands of modern life, and our designs are tailored to meet those needs without compromising on style. From comfortable loungewear to chic ensembles for various occasions, Prepp Studio offers a diverse range of apparel that effortlessly transitions from day to night.</h2>
                </div>

                <div className="text-center my-5">
                    <h1 className="font-semibold text-black text-[18px]">Elevate your everyday style with Prepp Studio – where Ultimate Everyday Wear is not just a slogan, but a lifestyle.</h1>
                </div>

            </div>
            <Footer />
        </>
    )
}