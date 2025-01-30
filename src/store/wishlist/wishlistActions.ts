import { TProduct } from "../../types"; 

export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';

export const addToWishlist = (product: TProduct) => ({
  type: ADD_TO_WISHLIST,
  payload: product,
});

export const removeFromWishlist = (product: TProduct) => ({
  type: REMOVE_FROM_WISHLIST,
  payload: product,
});