import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  isOpenCollapseMonths: false,
};

export const monthsListCollapseSlice = createSlice({
  name: "monthsListCollapse",
  initialState,
  reducers: {
    setIsOpenMonthsListCollapse: (state) => {
      state.isOpenCollapseMonths = !state.isOpenCollapseMonths;
    },
  },
});

export const { setIsOpenMonthsListCollapse } = monthsListCollapseSlice.actions;
export default monthsListCollapseSlice.reducer;
