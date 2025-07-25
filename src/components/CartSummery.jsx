'use client'

import React, { useEffect, useState } from "react";
import PriceFormat from "./PriceFormat";

const CartSummery = ({ cart }) => {
    const [totalAmount , setTotalAmount] =useState(0)
    const [discountAmount , setDiscountAmount] =useState(0)

    useEffect(() => {
        let amt = 0;
        let disAmt = 0;
        cart.map((item) => {
            amt += item.price * item.quantity
            disAmt += ((item.price * item.quantity ) / 100 ) * item.quantity
        })
        setTotalAmount(amt)
        setDiscountAmount(disAmt)
     } , [cart])

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <h1>SubTotal</h1>
        <PriceFormat amount={totalAmount} />
      </div>
      <div className="flex justify-between">
        <h1>DiscountAmount</h1>
        <PriceFormat amount={discountAmount} />
      </div>
      <div className="flex justify-between">
        <h1>PayableAmount</h1>
        <PriceFormat amount={totalAmount - discountAmount} />
      </div>
      <button className="h-10 w-60 bg-blue-600">CheckOut</button>
    </div>
  );
};

export default CartSummery;
