import { createSlice } from "@reduxjs/toolkit";
import { createOrder } from "./act/actCreateOrder";
import { TLoading, TOrder, isString } from "../../types";

interface IOrderState {
  records: TOrder[] | null;
  loading: TLoading;
  error: string | null;
}

const initialState: IOrderState = {
  records: null,
  loading: "idle",
  error: null,
};

const getAllOrdersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = "succeeded";
        if (state.records) {
          state.records.push(action.payload); // Append the new order
        } else {
          state.records = [action.payload]; // Initialize the array if it's null
        }
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = "failed";
        if (isString(action.payload)) {
          state.error = action.payload;
        }
      });
  },
});

export default getAllOrdersSlice.reducer;