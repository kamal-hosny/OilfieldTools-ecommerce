import { createAsyncThunk } from "@reduxjs/toolkit"; 
import { axiosConfig } from "../../../services/axiosConfig";  
import { axiosErrorHandler } from "../../../utils";

export const actGetOneProduct = createAsyncThunk(
    "products/getOneProduct", 
    async (id: string, thunkAPI) => {
        const { rejectWithValue } = thunkAPI
        try {
            const response = await axiosConfig.get(`proudect/${id}?`);
            
            console.log(response);
            
            return response.data;
        } catch (error) {
            return rejectWithValue(axiosErrorHandler(error));
        }
    }
) 