import { createSlice } from "@reduxjs/toolkit";


type ModelInitialState = {
  infoMonths: string [];
  infoMonthsError: {};
  infoMonthsIsLoading: boolean;
};

const initialState: ModelInitialState = {
  infoMonths: [],
  infoMonthsError: {},
  infoMonthsIsLoading: false,
};

export const infoMonthsSlice = createSlice({
  name: "infoMonths",
  initialState,
  reducers: {
    getInfoMonths: (state, action) => {
      state.infoMonths = action.payload;
    },
    getInfoMonthError: (state, action) => {
      state.infoMonthsError = action.payload;
    },

    getInfoMonthIsLoading: (state, action) => {
      state.infoMonthsIsLoading = action.payload;
    },
  },
});

export const { getInfoMonths, getInfoMonthError, getInfoMonthIsLoading } =
  infoMonthsSlice.actions;
export default infoMonthsSlice.reducer;
