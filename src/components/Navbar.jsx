import { NavItem } from "@/lib";
import Link from "next/link";
import React from "react";
import Cart from "./Cart";
import SearchInput from "./SearchInput";


const Navbar = () => {
  return (
    <div className="h-10 bg-teal-400 flex justify-around items-center">
      <div className="flex  gap-x-10 ">
        {NavItem.map((singleItem) => (
          <Link key={singleItem.title} href={singleItem.href}>
            {singleItem.title}
          </Link>
        ))}
      </div>
      <SearchInput />
      <Cart />
    </div>
  );
};

export default Navbar;
