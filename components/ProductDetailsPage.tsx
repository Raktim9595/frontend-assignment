import { Product } from "@/utils/types";
import React from "react";
import { HeartIcon, StarIcon } from "@heroicons/react/24/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { selectCartState, addToCart, addProductsInCart } from "@/store/cartSlice";

const ProductDetailsPage = ({ product }: { product: Product }) => {
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
    <div className="flex px-8 sm:px-0 flex-col space-y-5 sm:space-y-0 sm:flex-row h-[65vh] md:h-[65vh] lg:h-[75vh] sm:justify-between sm:space-x-4 md:space-x-0">
      {/* image container  */}
      <div className="w-44 self-center sm:self-auto sm:w-20 basis-[48%] xl:basis-2/5 bg-white rounded shadow flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-44 md:w-60 bg-contain"
        />
      </div>

      {/* details section  */}
      <div className="basis-[48%] xl:basis-2/5 flex flex-col space-y-3">
        <h3 className="font-medium text-2xl">{product.title}</h3>

        {/* ratings */}
        <div className="flex items-center space-x-3">
          <StarIcon className="h-5 w-5 text-yellow-400" />
          <p className="text-sm text-gray-400">
            {product.rating.rate} ratings . {product.rating.count} sold
          </p>
        </div>

        {/* description  */}
        <p className="text-gray-600 text-sm md:text-base">
          {product.description}
        </p>

        {/* price  */}
        <p>
          <span className="text-3xl font-medium">$ </span>
          <span className="text-2xl font-light">{product.price}</span>
        </p>

        {/* buttons  */}
        <div className="flex items-center space-x-2">
          <button className="bg-blue-600 px-4 py-2 text-white rounded active:scale-90 transition-all duration-200 ease-out active:shadow">
            <div
              onClick={handleCartClick}
              className="flex items-center space-x-2 w-max mx-auto"
            >
              <ShoppingCartIcon className="h-5 w-5" />
              <p className="text-sm">Add to cart</p>
            </div>
          </button>
          <button className="bg-orange-600 px-4 py-2 text-white rounded active:scale-90 transition-all duration-200 ease-out active:shadow">
            <div className="flex items-center space-x-2 w-max mx-auto">
              <HeartIcon className="h-5 w-5" />
              <p className="text-sm">Add to favourites</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
