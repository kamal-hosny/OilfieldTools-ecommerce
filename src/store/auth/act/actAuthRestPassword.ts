import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosErrorHandler } from "../../../utils/index.js";

import { axiosConfig } from "../../../services/axiosConfig";

type TResend = {
    Email: string;
  };

const actAuthRestPassword = createAsyncThunk(
    "auth/actAuthRestPassword",
    async (data: TResend, thunk) => {
        const { rejectWithValue } = thunk;

        try{
            const res = await axiosConfig.post("/user/restpassword", data)
            return res.data
        } catch ( error ) {
            return rejectWithValue(axiosErrorHandler(error));
        }
    }
)

export default actAuthRestPassword