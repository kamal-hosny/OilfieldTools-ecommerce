
import { TProduct } from '../../types';
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from './wishlistActions';

const initialState = {
  items: [],
};

const wishlistReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        items: state.items.filter((item: TProduct) => item._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export default wishlistReducer;