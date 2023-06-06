import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ModelInitialState {
  numberOfDays: any;
  data: any;
}

const initialState: any = {
  numberOfDays: "",
  dataFromBack: [],
};

export const hoursPanelSlice = createSlice({
  name: "hoursPanel",
  initialState,
  reducers: {
    handleChange: (state, action: PayloadAction<any>) => {
      state.numberOfDays = action.payload;
    },
    getData: (state, action: PayloadAction<any>) => {
      const tt = action.payload ? Object.values(action.payload) : [];
      state.dataFromBack = tt.flat();
    },
  },
});

export const { handleChange, getData } = hoursPanelSlice.actions;
export default hoursPanelSlice.reducer;
