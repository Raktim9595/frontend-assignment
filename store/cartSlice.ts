import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";

export interface CartProducts {
  productId: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
  description: string;
}

export interface CartState {
  cartDetails: {
    id: number;
    products: CartProducts[] | undefined;
  };
}

const initState: CartState = {
  cartDetails: {
    id: 1,
    products: undefined,
  },
};

interface PayloadType {
  payload: CartState;
}

export const cartSlice = createSlice({
  name: "cart",
  initialState: initState,
  reducers: {
    addToCart: (state, action: PayloadType) => {
      state.cartDetails = action.payload.cartDetails;
    },
    addProductsInCart: (
      state,
      action: {
        payload: { cartDetails: { id: number; product: CartProducts } };
      }
    ) => {
      const index: number | undefined = state.cartDetails.products?.findIndex(
        (obj) => obj.productId === action.payload.cartDetails.product.productId
      );

      if (index === -1) {
        state.cartDetails.products?.push(action.payload.cartDetails.product);
      }
    },
    updateQuantity: (
      state,
      action: { payload: { productId: number; quantity: number } }
    ) => {
      const updatedData = state.cartDetails.products?.map((x) =>
        x.productId === action.payload.productId
          ? { ...x, quantity: action.payload.quantity }
          : x
      );
      state.cartDetails.products = updatedData;
    },
  },
});

export const { addToCart, addProductsInCart, updateQuantity } =
  cartSlice.actions;
export const selectCartState = (state: AppState) => state.cart;
export const selectTotal = (state: AppState) =>
  state.cart.cartDetails.products?.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
export default cartSlice.reducer;
