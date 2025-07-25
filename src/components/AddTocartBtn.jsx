"use client";

import {
  addToCart,
  increaseingQuantity,
  decreaseingQuantity,
} from "@/app/features/products/productsSlice";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const AddTocartBtn = ({ cartItem }) => {
  const noorShop = useSelector((state) => state.NoorShop.cart);
  const disPatch = useDispatch();
  const [existingProducts, setExistingProduct] = useState(null);
 

  useEffect(() => {
    const availableProducts = noorShop.find((item) => item.id === cartItem.id);
    if (availableProducts) {
      setExistingProduct(availableProducts);
    }
  }, [noorShop, cartItem]);

  const handleQuantityOfDecrese = () => {
    disPatch(decreaseingQuantity(cartItem));
  };
  const handleQuantityofIncrease = () => {
    disPatch(increaseingQuantity(cartItem));
  };

  const handleBtn = () => {
    disPatch(addToCart(cartItem));
    toast.success(`${cartItem.title.substring(1, 15)}...added successfully `);
  };
  return (
    <div>
      
      {existingProducts ? (
        <div className="flex gap-x-6 mt-4 justify-center text-2xl ">
          <button
            disabled={existingProducts.quantity <= 1}
            
            onClick={handleQuantityOfDecrese}
          >
            <FaMinusCircle />
          </button>
          <p>{existingProducts.quantity}</p>
          <button onClick={handleQuantityofIncrease}>
            <FaPlusCircle />
          </button>
        </div>
      ) : (
        <button
          onClick={handleBtn}
          className="h-8 w-40 bg-blue-500 mt-2 cursor-pointer"
        >
          Add To Cart
        </button>
      )}
    </div>
  );
};

export default AddTocartBtn;
