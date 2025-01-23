import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosConfig } from "../../../services/axiosConfig";
import { axiosErrorHandler } from "../../../utils";

export const actGetAllConditions = createAsyncThunk(
    'Conditions/actGetAllConditions',
    async (_, thunkApi) => {
        const { rejectWithValue } = thunkApi
        try {
            const response = await axiosConfig.get(`proudect/get/Condition`)
            return response.data
        }
        catch (error) {
            return rejectWithValue(axiosErrorHandler(error));
        }
    }
)