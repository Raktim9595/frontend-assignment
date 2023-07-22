import React from "react";
import { useSelector } from "react-redux";
import { selectCartState, selectTotal } from "@/store/cartSlice";
import CartDetails from "@/components/CartDetails";
import { CreditCardIcon } from "@heroicons/react/24/outline";
import ErrorComponent from "@/components/ErrorComponent";

const Cart = () => {
  const { cartDetails } = useSelector(selectCartState);
  const total = useSelector(selectTotal);

  if (cartDetails.products === undefined) {
    return (
      <div className="mt-5 min-h-[70vh]">
        <ErrorComponent message="couldnot fetch data for cart or there are no any items in cart" />
      </div>
    );
  }

  return (
    <div className="min-h-[70vh]">
      <div className="max-w-5xl mx-auto mt-5 bg-white rounded shadow px-10 py-4">
        <h3 className="text-2xl font-medium">Cart Items:</h3>
        <div className="mt-4 flex flex-col space-y-3">
          {cartDetails.products?.map((cartObj) => (
            <div key={cartObj.productId}>
              <CartDetails product={cartObj} />
              <hr />
            </div>
          ))}
        </div>

        <div className="w-max ml-auto mt-3">
          <div className="flex items-center space-x-3">
            <p className="font-medium">Total: </p>
            <p>
              <span className="font-medium tex-lg">$ </span>
              <span>{total?.toFixed(2)}</span>
            </p>
          </div>
          <button className="flex mt-2 text-blue-800 items-center space-x-3 px-3 py-1.5 rounded border-2 border-blue-600 active:scale-90 active:shadow transition-all duration-200 ease-in-out">
            <CreditCardIcon className="h-5 w-5" />
            <span>Pay now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
