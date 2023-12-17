import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModelInitialState = {
  isPrinted: boolean;
  agree: boolean;
  header: string;
};

const initialState: ModelInitialState = {
  isPrinted: false,
  agree: false,
  header: "",
};

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    printAlert: (state, action: PayloadAction<string>) => {
      state.isPrinted = true;
      state.header = action.payload;
    },
    closeAlert: state => {
      state.isPrinted = false;
    },
    agreeAlert: (state, action: PayloadAction<boolean>) => {
      state.agree = action.payload;
    },
  },
});

export const { printAlert, closeAlert, agreeAlert } = alertSlice.actions;
export default alertSlice.reducer;
