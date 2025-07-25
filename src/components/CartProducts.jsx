'use client'
import Image from "next/image";
import React from "react";
import AddTocartBtn from "./AddTocartBtn";
import { IoIosClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { removeCartItem } from "@/app/features/products/productsSlice";
import toast from "react-hot-toast";

const CartProducts = ({ cartItem }) => {
  const disPatch = useDispatch()


  const handleRemoveCart =() => {
    disPatch(removeCartItem(cartItem.id))
    toast.success(` ${cartItem.title.substring( 0 , 10 )} ... remove successfully`)
  }
  return (
    <div className="flex justify-between relative ">
      <div className="h-60 border border-gray-300 shadow-violet-800 shadow w-50 bg-white/50 flex basis-[30%] ">
        <Image
          src={cartItem.images[0]}
          alt="Images"
          height={300}
          width={300}
          className="h-full w-full object-contain "
        />
      </div>
      <div className=" basis-[65%] bg-white/50 justify-center px-8 flex flex-col">
        <h1>{cartItem.title}</h1>
        <h1>Brand: {cartItem.brand}</h1>
        <h1>Category: {cartItem.category}</h1>
        <div className="flex">
          <h1>Price: {cartItem.price}</h1>
          <AddTocartBtn cartItem={cartItem} />
        </div>
        <button onClick={handleRemoveCart} className="absolute z-999 text-5xl top-2 right-4 cursor-pointer">
          <IoIosClose  />
        </button>
      </div>
    </div>
  );
};

export default CartProducts;
