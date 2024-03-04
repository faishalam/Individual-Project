`use client`
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ProductType } from '../type';
import LoadingComponent from './loading';
import { ErrorComponent } from './error';
import Link from 'next/link';
import WishlistButton from './wishlistButton'
import { NextRequest } from 'next/server';
export const dynamic = 'force-dynamic'


export default function CardListProduct({ products, loading, error, fetchData }: { products: ProductType[], loading: boolean, error: string | null, fetchData: () => void }, request: NextRequest) {

  if (loading) return <LoadingComponent />;

  if (error) return <ErrorComponent error={error} />;

  return (
    <InfiniteScroll
      dataLength={products.length}
      next={fetchData}
      hasMore={true}
      loader={loading}
      endMessage={<p>Yay! You have seen it all</p>}
    >
      <div className="grid grid-cols-5 mx-5 gap-4 pt-[120px]">
        {products.map((product) => (
          <div className="product-card cursor-pointer relative" key={product._id}>
            <div className="product-card-image">
              <Link href={`/products/${product.slug}`} key={product._id}>
                <img src={product.thumbnail} className="rounded-lg h-full max-w-100% object-cover" alt="" />
              </Link>
              <WishlistButton productsId={product._id.toString()} />
            </div>

            <div className="flex flex-wrap justify-between items-center mt-2 mb-1">

              <div className="product-card-detail">
                <p className="text-sm font-semibold text-black">{product.name}</p>

              </div>
              <p className="font-semibold text-right text-[12px] text-black">Rp. {product.price}</p>


              <div className="product-card-price">
                <p className="font-md text-[13px] font-medium text-black">S M L XL XXL</p>

              </div>

            </div>
          </div>
        ))}
      </div>
    </InfiniteScroll>


  )

}