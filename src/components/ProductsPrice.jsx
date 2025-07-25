'use client'

import React, { useEffect, useState } from "react";
import PriceFormat from "./PriceFormat";
import { useDispatch, useSelector } from "react-redux";

const ProductsPrice = ({ products }) => {
  const noorShop = useSelector((state) => state.NoorShop.cart);
  const disPatch = useDispatch();
  const [existingProducts, setExistingProduct] = useState(null);

  useEffect(() => {
    const availableProducts = noorShop.find((item) => item.id === products.id);
    if (availableProducts) {
      setExistingProduct(availableProducts);
    }
  }, [noorShop, products]);

  const regularPrice = products.price;
  const discountPrice = products.price + products.discountPercentage / 100;
  return (
    <div className="flex items-center gap-x-3">
      <PriceFormat
        amount={existingProducts ? discountPrice* existingProducts.quantity : discountPrice}
        className="line-through font-normal"
      />
      <PriceFormat amount={existingProducts ? regularPrice * existingProducts.quantity : regularPrice} className=" font-semibold" />
    </div>
  );
};

export default ProductsPrice;
