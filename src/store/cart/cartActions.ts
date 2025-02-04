import { TProduct } from "../../types";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
export const CLEAR_CART = "CLEAR_CART";

export const addToCart = (product: TProduct, quantity: number) => ({
  type: ADD_TO_CART,
  payload: { ...product, quantity },
});

export const removeFromCart = (productId: string) => ({
  type: REMOVE_FROM_CART,
  payload: { _id: productId },
});

export const increaseQuantity = (productId: string, quantity: number) => ({
  type: INCREASE_QUANTITY,
  payload: { _id: productId, quantity },
});

export const decreaseQuantity = (productId: string) => ({
  type: DECREASE_QUANTITY,
  payload: { _id: productId },
});

export const clearCart = () => ({
  type: CLEAR_CART,
});