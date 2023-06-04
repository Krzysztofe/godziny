import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface ModelInitialState {
  numberOfDays:any
}

const initialState: any = {
  numberOfDays: ''
};

export const hoursPanelSlice = createSlice({
  name: "hoursPanel",
  initialState,
  reducers: {
    handleChange: (state, action: PayloadAction<any>) => {
      state.numberOfDays = action.payload;
    },
  },
});

export const { handleChange } = hoursPanelSlice.actions;
export default hoursPanelSlice.reducer;
