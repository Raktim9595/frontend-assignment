import React from "react";
import { useSelector } from "react-redux";
import { selectCartState } from "@/store/cartSlice";

const CartNumber = () => {
  const { cartDetails } = useSelector(selectCartState);

  return (
    <div className="hidden sm:flex absolute -top-1 right-1 h-5 w-5 items-center justify-center rounded-full bg-orange-600">
      {cartDetails.products !== undefined ? (
        <p className="text-white text-xs">{cartDetails.products.length}</p>
      ) : (
        <p className="text-white text-xs">0</p>
      )}
    </div>
  );
};

export default CartNumber;
