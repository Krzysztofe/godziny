import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";

type ModelInitialState = {
  listMonths: string[] | undefined | null;
  listMonthsError: string | null;
};

const initialState: ModelInitialState = {
  listMonths: null,
  listMonthsError: null,
};

export const listMonthsSlice = createSlice({
  name: "listMonths",
  initialState,
  reducers: {
    getListMonths: (
      state,
      action: PayloadAction<string[] | null | undefined>
    ) => {
      state.listMonths = action.payload;
    },
    getListMonthsError: (state, action: PayloadAction<string | null>) => {
      state.listMonthsError = action.payload;
    },
  },
});

export const { getListMonths, getListMonthsError } = listMonthsSlice.actions;
export default listMonthsSlice.reducer;
