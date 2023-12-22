import { PayloadAction, SerializedError, createSlice } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { ModelMonth } from "../../sharedModels/modelMonth";

type ModelInitialState = {
  isMonthSuccess: boolean;
  isUserSuccess: boolean;
};

const initialState: ModelInitialState = {
  isMonthSuccess: false,
  isUserSuccess: false,
};

export const requestSuccessSlice = createSlice({
  name: "requestSuccess",
  initialState,
  reducers: {
    getMonthSuccess: (state, action: PayloadAction<boolean>) => {
      state.isMonthSuccess = action.payload;
    },
    getUserSuccess: (state, action: PayloadAction<boolean>) => {
      state.isUserSuccess = action.payload;
    },
  },
});

export const { getMonthSuccess, getUserSuccess } = requestSuccessSlice.actions;
export default requestSuccessSlice.reducer;
