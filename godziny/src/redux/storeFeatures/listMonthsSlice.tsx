import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModelInitialState = {
  listMonths: string[] | undefined | null;
  listMonthsError: string | null;
  openCollapseIndex: number | null;
  UID: string;
};

const initialState: ModelInitialState = {
  listMonths: null,
  listMonthsError: null,
  openCollapseIndex: null,
  UID: "",
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
    setCollapseIndex: (state, action: PayloadAction<number | null>) => {
      state.openCollapseIndex = action.payload;
    },
    getID: (state, action: PayloadAction<any>) => {
      state.UID = action.payload;
    },
  },
});

export const { getListMonths, getListMonthsError, setCollapseIndex, getID } =
  listMonthsSlice.actions;
export default listMonthsSlice.reducer;
