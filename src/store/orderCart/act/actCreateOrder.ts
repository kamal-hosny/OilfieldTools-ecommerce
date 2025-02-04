import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosConfig } from "../../../services/axiosConfig";
import { axiosErrorHandler } from "../../../utils";
import { RootState } from "../../rootReducer";
import { TOrder } from "../../../types";

export const createOrder = createAsyncThunk(
  "orders/createOrder",
  async (data: TOrder, thunk) => {
    const { rejectWithValue, getState } = thunk;  
    //
    const state = getState() as RootState;
    const { auth } = state;
    const token = auth.token;

    try {
      const response = await axiosConfig.post("order", data, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          token: token,
        },
      });
      
      return response.data;
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error));
    }
  }
);
