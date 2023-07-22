"use client";

import { CartProducts } from "@/store/cartSlice";
import React, { useState } from "react";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { updateQuantity } from "@/store/cartSlice";

const CartDetails = (props: { product: CartProducts }) => {
  const [quantity, setQuantity] = useState(props.product.quantity);
  const dispatch = useDispatch();

  return (
    <div className="flex items-start space-x-6">
      {/* image section  */}
      <div className="basis-[10%] shrink-0">
        <img src={props.product.image} alt={props.product.title} />
      </div>

      {/* body section  */}
      <div className="grow">
        <h4 className="font-medium">{props.product.title}</h4>
        <p className="text-sm text-gray-600 italic hidden sm:inline-block">
          {props.product.description}
        </p>
      </div>

      {/* pricing section  */}
      <div className="basis-[10%] shrink-0">
        <p>
          <span>$ </span>
          <span>{props.product.price}</span>
        </p>

        <div className="flex items-center space-x-3">
          <MinusCircleIcon
            onClick={() => {
              if (quantity >= 1) {
                dispatch(
                  updateQuantity({
                    productId: props.product.productId,
                    quantity: quantity - 1,
                  })
                );
                setQuantity(quantity - 1);
              }
            }}
            className="h-6 w-6 cursor-pointer"
          />
          <p>{quantity}</p>
          <PlusCircleIcon
            onClick={() => {
              dispatch(
                updateQuantity({
                  productId: props.product.productId,
                  quantity: quantity + 1,
                })
              );
              setQuantity(quantity + 1);
            }}
            className="h-6 w-6 cursor-pointer"
          />
        </div>

        {/* total price  */}
        <div className="flex items-center space-x-2">
          <p className="text-lg font-medium">$ </p>
          <p>{(props.product.price * quantity).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
