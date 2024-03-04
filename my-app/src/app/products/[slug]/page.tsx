import CarouselDetailsProduct from "../../components/carouselDetailProduct"
import Footer from "../../components/footer"
import Navbar from "../../components/navbar"
export const dynamic = 'force-dynamic'

async function fetchDataBySlug(slug: string) {
    'use server'
    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + `/api/products/${slug}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-store'
    })
    return await response.json()
}

export default async function DetailProduct({ params }: { params: { slug: string } }) {
    const {data} = await fetchDataBySlug(params.slug)

    return (
        <>
            <Navbar />
            <CarouselDetailsProduct data={data} />
            <Footer />
        </>
    )
}