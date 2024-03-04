'use client'

export const dynamic = 'force-dynamic'

import { useEffect, useState } from "react"
import CardListProduct from "../components/cardListProduct"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import { ProductType } from "../type"
import { useSearchParams } from "next/navigation"

export default function ListProduct() {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const params = useSearchParams()
    const [search, setSearch] = useState(params.get('search'));
    

    const fetchData = async () => {
        try {
            if(!search) {
                const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/products/fetch', {
                    cache: 'no-store',
                });
    
                const data = await response.json();
                setProducts(data)
                setLoading(false);
            } else {
                const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/products/fetch?search=' + search , {
                    cache: 'no-store',
                });

                const data = await response.json();
                setProducts(data)
                setLoading(false);
            }


        } catch (error) {
            setError('Error fetching data');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <>
            <div className="bg-white">
                <Navbar />
                <CardListProduct products={products} loading={loading} error={error} fetchData={fetchData} />
                <Footer />
            </div>
        </>
    )
}