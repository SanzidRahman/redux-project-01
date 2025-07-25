import AddTocartBtn from "@/components/AddTocartBtn";
import getSinlgleProducts from "@/components/getSinlgleProducts";
import ProductsPrice from "@/components/ProductsPrice";
import Image from "next/image";
import React from "react";

const page = async ({ params }) => {
  const { id } = await params;
  let products = await getSinlgleProducts(id)

  return (
    <div className="flex justify-center pl-10 max-w-[1080px] mx-auto pt-10 gap-x-10">
      <div className="h-40 w-40 basis-[15%] flex flex-col gap-y-2">
        {products.images.map((item , index) => (
          <div key={index}>
            <Image
              src={item}
              alt="Images"
              height={400}
              width={400}
              className="h-full w-full object-contain border border-gray-500 "
            />
          </div>
        ))}
      </div>
      <div className="h-130 w-150 basis-[40%] bg-gray-500/30 ">
        <Image src={products.images[0]} alt="Images" height={500} width={500} />
      </div>
      <div className="flex flex-col justify-start basis-[30%]">
        <h1 className="text-2xl font-semibold"> {products.title}</h1>
        <h1>
          {" "}
          <span className="font-semibold">Description: </span>{" "}
          {products.description}
        </h1>
        <h1>
          <ProductsPrice products ={ products} />
        </h1>
        <h1>
          <span className="font-semibold">Rating: </span> {products.rating}
        </h1>
        <AddTocartBtn cartItem={products} />
      </div>
    </div>
  );
};

export default page;
