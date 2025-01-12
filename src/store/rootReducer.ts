import { combineReducers } from "@reduxjs/toolkit";
import darkModeReducer from "./features/darkMode/darkModeSlice";
import menuReducer from "./features/menu/menuSlice";

const rootReducer = combineReducers({
    darkMode: darkModeReducer,
    menu: menuReducer,
})

export default rootReducer;