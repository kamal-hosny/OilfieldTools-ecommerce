import { combineReducers } from "@reduxjs/toolkit";
import darkModeReducer from "./features/darkMode/darkModeSlice";
import menuReducer from "./features/menu/menuSlice";
import mobileWidthReducer from "./features/mobileWidth/mobileWidthSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import auth from "./auth/authSlice";

const authPersistConfig = {
    key: "auth",
    storage,
    whitelist: ["user", "token"],
  }


const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, auth),
    darkMode: darkModeReducer,
    menu: menuReducer,
    mobileWidth:  mobileWidthReducer

})

export default rootReducer;