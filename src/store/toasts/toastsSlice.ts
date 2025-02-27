import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { TToast } from "../../types";



interface IToastsSlice {
    records: TToast[];
}

const initialState: IToastsSlice = {
    records: [
        
],
}

const toastsSlice = createSlice({
    name: "toasts",
    initialState,
    reducers: {
        addToast: (state, action:PayloadAction<TToast>) => {
            state.records.push({
                id: nanoid(),
                type: action.payload.type,
                message: action.payload.message,
                delayAppearance: action.payload.delayAppearance || false,
            })
        },
        removeToast: (state, action) => {
            state.records = state.records.filter((el) => el.id !== action.payload)
        },
        stopDelayAppearance: (state, action) => {
            state.records.map(el => {
                if(el.id === action.payload) {
                    return el.delayAppearance = false
                }
                return el
            } )
        }
    },
});
export const { addToast, removeToast, stopDelayAppearance } = toastsSlice.actions;

export default toastsSlice.reducer