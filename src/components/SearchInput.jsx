'use client'

import Link from "next/link";
import { useEffect, useState } from "react";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const [product, setProduct] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);

  useEffect(() => {
    const getProductData = async () => {
      const data = await fetch("https://dummyjson.com/products");
      setProduct(await data.json());
    };
    getProductData();
  }, [product]);

  // useEffect(() => {
  //   const filtered = product.products.filter((item) =>
  //     item?.title?.toLowerCase().includes(search.toLowerCase())
  //   );
  //   setFilteredProduct(filtered);
  // }, [search, product]);

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input
        value={search}
        onChange={handleSearchInput}
        type="text"
        placeholder="Enter Your Products..."
        className="h-9 w-100 px-4 bg-blue-400 outline-0"
      />
      <div className="absolute flex h-auto w-100 bg-white/50 px-4">
        {search && (
          <div className="flex flex-col gap-y-2">
            {filteredProduct.length > 0 ? (
              <div className="flex flex-col">
                {filteredProduct.map((item) => (
                  <Link
                    onClick={() => setSearch("")}
                    className="hover:bg-white/60 px-2 py-1"
                    key={item.id}
                    href={{
                      pathname: `/products/${item.id}`,
                      query: { id: item.id },
                    }}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            ) : (
              <div>
                <h1>Products Not Found</h1>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
