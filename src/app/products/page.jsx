import AddTocartBtn from "@/components/AddTocartBtn";
import getAllProducts from "@/components/getAllProducts";
import ProductsPrice from "@/components/ProductsPrice";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductsPage = async () => {
  const data = await getAllProducts();
  let productsAll = await data.products;

  return (
    <div className="max-w-[1080px] mx-auto">
      <div className="flex flex-wrap gap-4">
        {productsAll.map((item) => (
          <div
            key={item.id}
            className="flex justify-center p-4 h-80 w-60 bg-teal-900/30"
          >
            <div className="relative">
              <h1>{item.title}</h1>
              <div className="h-40 w-40">
                <Link href={`/products/${item.id}`}>
                  <Image
                    src={item.images[0]}
                    alt="Images"
                    height={400}
                    width={400}
                    className="h-full w-full object-contain"
                  />
                </Link>
              </div>
              <span className="h-7 py-1 w-15 bg-amber-500 rounded-md text-sm text-center absolute top-6 -right-2">
                {item.discountPercentage}%
              </span>
              <ProductsPrice products={item} />
              <AddTocartBtn cartItem={item} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
