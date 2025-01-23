import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosErrorHandler } from "../../../utils/index.js";

import { axiosConfig } from "../../../services/axiosConfig";

type TVerify = {
    Email: string;
    otp: string;
  };

const actAuthVerifyEmail = createAsyncThunk(
    "auth/actAuthVerifyEmail",
    async (data: TVerify, thunk) => {
        const { rejectWithValue } = thunk;
        try{
            const res = await axiosConfig.post("/user/verify", data)
            console.log(data);
            console.log(res);
            
            return res.data
        } catch ( error ) {
            return rejectWithValue(axiosErrorHandler(error));
        }
    }
)

export default actAuthVerifyEmail