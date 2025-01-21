import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosErrorHandler } from "../../../utils/index.js";

import { axiosConfig } from "../../../services/axios-global.js";

type TResend = {
    Email: string;
  };

const actAuthResendEmail = createAsyncThunk(
    "auth/actAuthResendEmail",
    async (data: TResend, thunk) => {
        const { rejectWithValue } = thunk;

        try{
            const res = await axiosConfig.post("/user/resend", data)
            return res.data
        } catch ( error ) {
            return rejectWithValue(axiosErrorHandler(error));
        }
    }
)

export default actAuthResendEmail