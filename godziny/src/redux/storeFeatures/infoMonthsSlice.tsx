import { PayloadAction, createSlice } from "@reduxjs/toolkit";



const initialState: any = {
  infoMonths: [],
  infoMonthsError: {},
  infoMonthsIsLoading: false,
};

export const infoMonthsSlice = createSlice({
  name: "infoMonths",
  initialState,
  reducers: {
    getInfoMonths: (state, action: PayloadAction<any>) => {
      state.infoMonths = action.payload;
    },
    getInfoMonthError: (state, action: PayloadAction<any>) => {
      state.infoMonthsError = action.payload;
    },

    getInfoMonthIsLoading: (state, action: PayloadAction<boolean>) => {
      state.infoMonthsIsLoading = action.payload;
    },
  },
});

export const { getInfoMonths, getInfoMonthError, getInfoMonthIsLoading } =
  infoMonthsSlice.actions;
export default infoMonthsSlice.reducer;
