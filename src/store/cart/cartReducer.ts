import { TProduct } from "../../types";
import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from "./cartActions";

interface CartState {
  items: TProduct[];
}

const initialState: CartState = {
  items: [],
};

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingProductIndex = state.items.findIndex(
        (item: TProduct) => item._id === action.payload._id
      );

      if (existingProductIndex >= 0) {
        const updatedItems = [...state.items];
        const existingQuantity = Number(updatedItems[existingProductIndex].quantity) || 0;
        const newQuantity = Number(action.payload.quantity) || 1;
        updatedItems[existingProductIndex] = {
          ...updatedItems[existingProductIndex],
          quantity: existingQuantity + newQuantity,
        };
        return { ...state, items: updatedItems };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: Number(action.payload.quantity) || 1 }],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item: TProduct) => item._id !== action.payload._id),
      };

    case INCREASE_QUANTITY:
      return {
        ...state,
        items: state.items.map((item: TProduct) =>
          item._id === action.payload._id
            ? { ...item, quantity: (Number(item.quantity) || 0) + (Number(action.payload.quantity) || 1) }
            : item
        ),
      };

    case DECREASE_QUANTITY:
      return {
        ...state,
        items: state.items
          .map((item: TProduct) =>
            item._id === action.payload._id
              ? { ...item, quantity: Math.max((Number(item.quantity) || 0) - 1, 0) }
              : item
          )
          .filter((item: TProduct) => (Number(item.quantity) || 0) > 0),
      };

    default:
      return state;
  }
};

export default cartReducer;