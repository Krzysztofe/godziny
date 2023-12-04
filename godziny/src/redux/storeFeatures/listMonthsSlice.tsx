import { createSlice } from "@reduxjs/toolkit";


type ModelInitialState = {
  listMonths: string [];
  listMonthsError: {};
  listMonthsIsLoading: boolean;
};

const initialState: ModelInitialState = {
  listMonths: [],
  listMonthsError: {},
  listMonthsIsLoading: false,
};

export const listMonthsSlice = createSlice({
  name: "listMonths",
  initialState,
  reducers: {
    getListMonths: (state, action) => {
      state.listMonths = action.payload;
    },
    getListMonthsError: (state, action) => {
      state.listMonthsError = action.payload;
    },

    getListMonthsIsLoading: (state, action) => {
      state.listMonthsIsLoading = action.payload;
    },
  },
});

export const { getListMonths, getListMonthsError, getListMonthsIsLoading } =
  listMonthsSlice.actions;
export default listMonthsSlice.reducer;
