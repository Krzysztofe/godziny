import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ModelInitialState = {
  updateMonthError: boolean;
};

const initialState: ModelInitialState = {
  updateMonthError: false,
};

export const monthPanelSlice = createSlice({
  name: "monthPanel",
  initialState,
  reducers: {
    getUpdateMonthError: (state, action: PayloadAction<boolean>) => {
      state.updateMonthError = action.payload;
    },
  },
});

export const { getUpdateMonthError } = monthPanelSlice.actions;
export default monthPanelSlice.reducer;
