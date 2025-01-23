import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosErrorHandler } from "../../../utils";
import { axiosConfig } from "../../../services/axiosConfig";


type TChangeDate = {
  Email: string;
  otp: string;
  password: string;
};

const actAuthChangePassword = createAsyncThunk(
  "auth/actAuthChangePassword",
  async (changeDate: TChangeDate, thunk) => {

    console.log(changeDate);
    
    const { rejectWithValue } = thunk;

    try {
      const res = await axiosConfig.post("/user/changepassword", changeDate);
      return res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actAuthChangePassword;
