"use client";

import Link from "next/link";
import React from "react";
import { FaShopify } from "react-icons/fa";
import { useSelector } from "react-redux";

const Cart = () => {
  const noorshop = useSelector((state) => state.NoorShop.cart);
  return (
    <div className="relative">
      <Link href={"/cart"}>
        <FaShopify className="text-xl" />
      </Link>
      <div className=" h-3 w-3  flex justify-center items-center bg-blue-900 rounded-full absolute top-0 -right-1.5">
        <p className="text-sm text-white">
          {noorshop.length > 0 ? noorshop.length : "0"}
        </p>
      </div>
    </div>
  );
};

export default Cart;
