import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from "./cartActions";

const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingProductIndex = state.items.findIndex(
        (item) => item._id === action.payload._id
      );

      if (existingProductIndex >= 0) {
        const updatedItems = [...state.items];
        updatedItems[existingProductIndex] = {
          ...updatedItems[existingProductIndex],
          quantity: updatedItems[existingProductIndex].quantity + action.payload.quantity,
        };
        return { ...state, items: updatedItems };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: action.payload.quantity }],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload._id),
      };

    case INCREASE_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item._id === action.payload._id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        ),
      };

    case DECREASE_QUANTITY:
      return {
        ...state,
        items: state.items
          .map((item) =>
            item._id === action.payload._id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0),
      };

    default:
      return state;
  }
};

export default cartReducer;