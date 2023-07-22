"use client";

import React, {useRef} from "react";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";
import CartNumber from "./CartNumber";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const searchRef: React.RefObject<HTMLInputElement> = useRef(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/allProducts?searchName=${searchRef.current?.value}`);
  }

  return (
    <div className="flex items-center px-5 py-1.5 shadow-md justify-between space-x-3 md:space-x-10 sticky top-0 z-50 bg-white">
      {/* logo  */}
      <Link href={`/`}>
        <div className="md:text-xl lg:text-3xl font-medium cursor-pointer">
          <span>E-</span>
          <span className="hidden sm:inline-block text-orange-500">
            COMMERCE
          </span>
        </div>
      </Link>

      {/* searchbar  */}
      <div className="grow rounded-md flex items-center space-x-1 md:space-x-3 border border-gray-500 px-1 md:px-4">
        <MagnifyingGlassIcon className="h-6 w-6" />
        <form onSubmit={(e) => handleSubmit(e)} className="w-full">
          <input
            type="text"
            className="rounded-md w-full border-none focus:ring-0 focus:border-none focus:outline-0"
            placeholder="search..."
            ref={searchRef}
          />
          <input type="submit" hidden/>
        </form>
      </div>

      {/* carts and wishlist */}
      <div className="flex items-center space-x-3 text-xs sm:text-base">
        <Link href={`/allProducts?searchName=""`}>
          <p className="hover:underline">allProdcuts</p>
        </Link>

        <Link href="/cart">
          <div className="flex items-center space-x-1 pr-3 border-r-2 border-gray-500 cursor-pointer hover:underline relative">
            <p className="hidden md:block">cart</p>
            <ShoppingCartIcon className="h-4 w-4 sm:h-6 sm:w-6" />
            <CartNumber />
          </div>
        </Link>

        <div className="hidden sm:flex items-center space-x-3 cursor-pointer hover:underline">
          <p className="hidden md:block">wishlist</p>
          <HeartIcon className="h-6 w-6 text-orange-600" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
