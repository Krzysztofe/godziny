import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModelInitialState = {
  header: string;
};

const initialState: ModelInitialState = {
  header: "",
};

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    printAlert: (state, action: PayloadAction<string>) => {
      state.header = action.payload;
    },
  },
});

export const { printAlert } = alertSlice.actions;
export default alertSlice.reducer;
