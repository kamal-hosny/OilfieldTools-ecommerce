import { createSlice } from "@reduxjs/toolkit";
import { TLoading, TQuerty, isString } from "../../types";
import { actGetAllBrands } from "./act/actGetAllBrands";
import { actGetAllCategories } from "./act/actGetAllCategories";
import { actGetAllConditions } from "./act/actGetAllConditions";
import { actGetAllMaterialCategories } from "./act/actGetAllMaterialCategories";

interface QueryState {
  brandRecords: TQuerty[] | null | [];
  brandLoading: TLoading;
  brandError: string | null;

  categoryRecords: TQuerty[] | null | [];
  categoryLoading: TLoading;
  categoryError: string | null;

  conditionRecords: TQuerty[] | null | [];
  conditionLoading: TLoading;
  conditionError: string | null;

  materialCategoryRecords: TQuerty[] | null | [];
  materialCategoryLoading: TLoading;
  materialCategoryError: string | null;
}

const initialState: QueryState = {
  brandRecords: [],
  brandLoading: "idle",
  brandError: null,

  categoryRecords: [],
  categoryLoading: "idle",
  categoryError: null,

  conditionRecords: [],
  conditionLoading: "idle",
  conditionError: null,

  materialCategoryRecords: [],
  materialCategoryLoading: "idle",
  materialCategoryError: null,
};

const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {},
  extraReducers(builder) {
    // actGetAllBrands
    builder.addCase(actGetAllBrands.pending, (state) => {
      state.brandLoading = "pending";
      state.brandError = null;
    });
    builder.addCase(actGetAllBrands.fulfilled, (state, action) => {
      state.brandLoading = "succeeded";
      state.brandRecords = action.payload;
    });
    builder.addCase(actGetAllBrands.rejected, (state, action) => {
      state.brandLoading = "failed";
      if (isString(action.payload)) {
        state.brandError = action.payload;
      }
    });

    // actGetAllCategories
    builder.addCase(actGetAllCategories.pending, (state) => {
      state.categoryLoading = "pending";
      state.categoryError = null;
    });
    builder.addCase(actGetAllCategories.fulfilled, (state, action) => {
      state.categoryLoading = "succeeded";
      state.categoryRecords = action.payload;
    });
    builder.addCase(actGetAllCategories.rejected, (state, action) => {
      state.categoryLoading = "failed";
      if (isString(action.payload)) {
        state.categoryError = action.payload;
      }
    });

    // actGetAllConditions
    builder.addCase(actGetAllConditions.pending, (state) => {
      state.conditionLoading = "pending";
      state.conditionError = null;
    });
    builder.addCase(actGetAllConditions.fulfilled, (state, action) => {
      state.conditionLoading = "succeeded";
      state.conditionRecords = action.payload;
    });
    builder.addCase(actGetAllConditions.rejected, (state, action) => {
      state.conditionLoading = "failed";
      if (isString(action.payload)) {
        state.conditionError = action.payload;
      }
    });

    // actGetAllMaterialCategories
    builder.addCase(actGetAllMaterialCategories.pending, (state) => {
      state.materialCategoryLoading = "pending";
      state.materialCategoryError = null;
    });
    builder.addCase(actGetAllMaterialCategories.fulfilled, (state, action) => {
      state.materialCategoryLoading = "succeeded";
      state.materialCategoryRecords = action.payload;
    });
    builder.addCase(actGetAllMaterialCategories.rejected, (state, action) => {
      state.materialCategoryLoading = "failed";
      if (isString(action.payload)) {
        state.materialCategoryError = action.payload;
      }
    });
  },
});

export { actGetAllBrands, actGetAllCategories, actGetAllConditions, actGetAllMaterialCategories }
export default querySlice.reducer;