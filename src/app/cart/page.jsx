"use client";

import CartProducts from "@/components/CartProducts";
import CartSummery from "@/components/CartSummery";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const CartPage = () => {
  const { cart } = useSelector((state) => state.NoorShop);

  return (
    <div className="max-w-[1080px] mx-auto ">
      {cart.length > 0 ? (
        <div>
          <h1 className="text-5xl mt-4">Shopping Cart</h1>
          <hr className="h-[1px] mt-6 "></hr>
          <div className="grid grid-cols-12 mt-20 gap-2">
            <section className="col-span-7">
              <div className="space-y-4">
                {cart.map((item) => (
                  <CartProducts key={item.id} cartItem={item} />
                ))}
              </div>
            </section>
            <div className="bg-white/50  col-span-5 flex flex-col px-4">
              <h1 className="mt-4 text-3xl underline">Total Price</h1>
             <CartSummery cart ={cart} />
            </div>
          </div>
        </div>
      ) : (
        <div className=" max-w-[880px] mt-50 mx-auto flex flex-col justify-center items-center">
          <h1 className="text-4xl">Shopping Cart</h1>

          <p>
            Your Cart Is Empty , Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Assumenda nihil doloremque, error veritatis
            incidunt ipsam nulla, repudiandae eveniet vitae, at iste optio dicta
            ullam quae nesciunt consequuntur fugit expedita maiores! Dolorum
            quia facilis explicabo vero, expedita repudiandae incidunt id
            praesentium repellat quod. Recusandae ad sequi aut modi optio.
            Beatae, reprehenderit nihil! Corrupti ab voluptate at aperiam
            debitis ipsum illo voluptates.
          </p>
          <div className="text-2xl h-20 w-100 flex justify-center items-center bg-blue-600">
            <Link href={"/products"}>Go to Shopping</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
