import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ModelInitialState = {
  isMonthSuccess: boolean;
  isUserSuccess: boolean;
  isDaySuccess: boolean;
};

const initialState: ModelInitialState = {
  isMonthSuccess: false,
  isUserSuccess: false,
  isDaySuccess: false,
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
    getDaySuccess: (state, action: PayloadAction<boolean>) => {
      state.isDaySuccess = action.payload;
    },
  },
});

export const { getMonthSuccess, getUserSuccess, getDaySuccess } =
  requestSuccessSlice.actions;
export default requestSuccessSlice.reducer;
