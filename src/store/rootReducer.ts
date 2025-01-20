import { combineReducers } from "@reduxjs/toolkit";
import darkModeReducer from "./features/darkMode/darkModeSlice";
import menuReducer from "./features/menu/menuSlice";
import mobileWidthReducer from "./features/mobileWidth/mobileWidthSlice";

const rootReducer = combineReducers({
    darkMode: darkModeReducer,
    menu: menuReducer,
    mobileWidth:  mobileWidthReducer

})

export default rootReducer;