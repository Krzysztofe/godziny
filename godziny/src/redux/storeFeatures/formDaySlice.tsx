import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  formikData: null,
};

export const formDaySlice = createSlice({
  name: "formDay",
  initialState,
  reducers: {
    getAllFormik: (state, action) => {
      state.formikData = action.payload;
    },
  },
});

export const { getAllFormik } = formDaySlice.actions;
export default formDaySlice.reducer;
