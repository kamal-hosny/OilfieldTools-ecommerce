import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosErrorHandler } from "../../../utils";

import { axiosConfig } from "../../../services/axiosConfig";

type TRegisterData = {
  contactName: string;
  lastName: string;
  companyName: string;
  Email: string;
  phoneNumber: string;
  country: string;
  password: string;
};

const actAuthRegister = createAsyncThunk(
    "auth/actAuthRegister",
    async (RegisterData: TRegisterData, thunk ) => {
        const { rejectWithValue } = thunk;

        try {
            const res = await axiosConfig.post("/user", RegisterData)
            return res.data
        } catch (error) {
            return rejectWithValue(axiosErrorHandler(error));
        }
    }
)
export default actAuthRegister