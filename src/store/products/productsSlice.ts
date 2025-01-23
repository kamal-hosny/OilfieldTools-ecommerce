import { createSlice } from "@reduxjs/toolkit";
import { TLoading, TProduct, TProductResponse, isString } from "../../types";
import { actGetAllProducts } from "./act/actGetAllProducts";
import { actGetOneProduct } from "./act/actGetOneProduct";

interface ProductState {
    records: TProductResponse[] | null | [];
    record: TProduct | null | {};
    loading: TLoading;
    error: string | null
}

const initialState: ProductState = {
    records: [],
    record: null,
    loading: "idle",
    error: null
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers:{
        cleanUpProductsRecords: (state) => {
            state.records = [];
        }
    },
    extraReducers(builder) {
        // actGetAllProducts
        builder.addCase(actGetAllProducts.pending, (state) => {
            state.loading = "pending";
            state.error = null
        })
        builder.addCase(actGetAllProducts.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.records = action.payload
        })
        builder.addCase(actGetAllProducts.rejected, (state, action) => {
            state.loading = "failed";
            if(isString(action.payload)) {
                state.error = action.payload
            }
        })
        // actGetOneProduct
        builder.addCase(actGetOneProduct.pending, (state) => {
            state.loading = "pending";
            state.error = null ;
        })
        builder.addCase(actGetOneProduct.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.record = action.payload
        })
        builder.addCase(actGetOneProduct.rejected, (state, action) => {
            state.loading = "failed";
            if(isString(action.payload)) {
                state.error = action.payload
            }
        })
    },
})

export const { cleanUpProductsRecords } = productsSlice.actions;
export { actGetAllProducts };
export default productsSlice.reducer