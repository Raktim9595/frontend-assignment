"use client";

import { Product } from "@/utils/types";
import React from "react";
import LikeIcon from "./LikeIcon";
import { ShoppingCartIcon, ClockIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductsInCart,
  addToCart,
  selectCartState,
} from "@/store/cartSlice";

const HomeProductCard = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();
  const state = useSelector(selectCartState);

  const handleCartClick = () => {
    if (state.cartDetails.products === undefined) {
      dispatch(
        addToCart({
          cartDetails: {
            id: 1,
            products: [
              {
                productId: product.id,
                image: product.image,
                price: Number(product.price),
                title: product.title,
                quantity: 1,
                description: product.description,
              },
            ],
          },
        })
      );
    } else {
      dispatch(
        addProductsInCart({
          cartDetails: {
            id: state.cartDetails.id,
            product: {
              productId: product.id,
              image: product.image,
              price: Number(product.price),
              title: product.title,
              quantity: 1,
              description: product.description,
            },
          },
        })
      );
    }
  };

  return (
    <div className="rounded-md shadow-md w-60 min-[450px]:w-48 sm:w-60 xl:w-64 h-96 bg-white relative overflow-hidden">
      {/* image  */}
      <img src={product.image} alt={product.title} className="h-1/2 mx-auto" />

      {/* body section  */}
      <div className="mt-3 flex flex-col space-y-2 px-3">
        {/* category */}
        <p className="text-sm text-gray-600 italic">{product.category}</p>

        {/* product title  */}
        <h3 className="font-medium truncate">{product.title}</h3>

        {/* product price  */}
        <p className="text-lg">
          <span className="font-semibold">$ </span>
          <span className="font-medium text-orange-700">{product.price}</span>
        </p>

        {/* add to cart */}
        <button
          onClick={handleCartClick}
          className="bg-blue-600 px-4 py-2 text-white rounded active:scale-90 transition-all duration-200 ease-out active:shadow"
        >
          <div className="flex items-center space-x-2 w-max mx-auto">
            <ShoppingCartIcon className="h-5 w-5" />
            <p className="text-sm">Add to cart</p>
          </div>
        </button>

        {/* view more link */}
        <Link href={`/product/${product.id}`}>
          <div className="flex items-center space-x-2 w-max mx-auto cursor-pointer hover:underline decoration-blue-500">
            <ClockIcon className="h-4 w-4 text-blue-500" />
            <p className="text-sm text-blue-500">view details</p>
          </div>
        </Link>

        {/* like icon  */}
        <LikeIcon />
      </div>
    </div>
  );
};

export default HomeProductCard;
