import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModelInitialState = {
  searchedName: string;
};

const initialState: ModelInitialState = {
  searchedName: "",
};

export const filterDaysSlice = createSlice({
  name: "filterDays",
  initialState,
  reducers: {
    getSearchedName: (state, action: PayloadAction<string>) => {
      state.searchedName = action.payload;
    },
  },
});

export const { getSearchedName } = filterDaysSlice.actions;
export default filterDaysSlice.reducer;
