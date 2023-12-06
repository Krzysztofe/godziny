import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";

type ModelInitialState = {
  listMonths: string[] | undefined | null;
  listMonthsError: FetchBaseQueryError | SerializedError | undefined;
  listMonthsIsLoading: boolean;
};

const initialState: ModelInitialState = {
  listMonths: null,
  listMonthsError: undefined,
  listMonthsIsLoading: false,
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
    getListMonthsError: (
      state,
      action: PayloadAction<FetchBaseQueryError | SerializedError | undefined>
    ) => {
      state.listMonthsError = action.payload;
    },

    getListMonthsIsLoading: (state, action: PayloadAction<boolean>) => {
      state.listMonthsIsLoading = action.payload;
    },
  },
});

export const { getListMonths, getListMonthsError, getListMonthsIsLoading } =
  listMonthsSlice.actions;
export default listMonthsSlice.reducer;
