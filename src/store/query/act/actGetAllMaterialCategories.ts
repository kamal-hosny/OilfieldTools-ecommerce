import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosConfig } from "../../../services/axiosConfig";
import { axiosErrorHandler } from "../../../utils";

export const actGetAllMaterialCategories = createAsyncThunk(
    'MaterialCategories/actGetAllMaterialCategories',
    async (_, thunkApi) => {
        const { rejectWithValue } = thunkApi
        try {
            const response = await axiosConfig.get(`proudect/get/materialCategory`)
            return response.data
        }
        catch (error) {
            return rejectWithValue(axiosErrorHandler(error));
        }
    }
)