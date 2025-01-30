import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import auth from "./auth/authSlice";
import darkModeReducer from "./features/darkMode/darkModeSlice";
import menuReducer from "./features/menu/menuSlice";
import mobileWidthReducer from "./features/mobileWidth/mobileWidthSlice";
import productsReducer from "./products/productsSlice";
import queryReducer from "./query/querySlice";
import wishlistReducer from "./wishlist/wishlistReducer";
import cartReducer from "./cart/cartReducer";

const authPersistConfig = {
    key: "auth",
    storage,
    whitelist: ["user", "token"],
  }


const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, auth),
    products: productsReducer,
    query: queryReducer,
    darkMode: darkModeReducer,
    menu: menuReducer,
    mobileWidth:  mobileWidthReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,

})

export default rootReducer;