import { createAsyncThunk } from "@reduxjs/toolkit"; 
import { axiosConfig } from "../../../services/axiosConfig";
import { axiosErrorHandler } from "../../../utils";


type TQueryData = {
  modelNumber?: string | null;
  condition?: string | null;
  brand?: string | null;
  category?: string | null;
  materialCategory?: string | null;
  pageNumber?: string | null;
  search?: string | null;
  page?: string | number | null;
  limit?: string | number | null;
  min?: string | number | null;
  max?: string | number | null;
};



export const actGetAllProducts = createAsyncThunk(
  'products/getAllProducts',
  async (data:TQueryData , thunkAPI) => {
    const { rejectWithValue } = thunkAPI

    console.log(data);

    try {
      let query = `/proudect?`;

 // Dynamically add filters based on the passed data
      if (data.modelNumber) query += `ModelNumber=${encodeURIComponent(data.modelNumber)}&`;
      if (data.condition) query += `Condition=${encodeURIComponent(data.condition)}&`;
      if (data.brand) query += `Brand=${encodeURIComponent(data.brand)}&`;
      if (data.category) query += `Category=${encodeURIComponent(data.category)}&`;
      if (data.materialCategory) query += `materialCategory=${encodeURIComponent(data.materialCategory)}&`;
      if (data.pageNumber) query += `page=${encodeURIComponent(data.pageNumber)}&`;
      if (data.search) query += `search=${encodeURIComponent(data.search)}&`;
      if (data.page) query += `page=${encodeURIComponent(data.page)}&`;
      if (data.limit) query += `limit=${encodeURIComponent(data.limit) || '10'}&`;
      if (data.min) query += `min=${encodeURIComponent(data.min) || '0'}&`;
      if (data.max) query += `max=${encodeURIComponent(data.max) || '99999'}&`;

      // Remove trailing '&' or '?' if no query parameters were added
      query = query.endsWith('&') ? query.slice(0, -1) : query;


      const res = await axiosConfig.get(query);
      return res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);
