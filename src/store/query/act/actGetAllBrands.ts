import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosConfig } from "../../../services/axiosConfig";
import { axiosErrorHandler } from "../../../utils";

export const actGetAllBrands = createAsyncThunk(
    'brands/actGetAllBrands',
    async (_, thunkApi) => {
        const { rejectWithValue } = thunkApi
        try {
            const response = await axiosConfig.get(`proudect/get/Brand`)
            return response.data
        }
        catch (error) {
            return rejectWithValue(axiosErrorHandler(error));
        }
    }
)
