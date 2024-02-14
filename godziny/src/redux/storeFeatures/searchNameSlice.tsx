import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModelInitialState = {
  searchedName: string;
};

const initialState: ModelInitialState = {
  searchedName: "",
};

export const searchNameSlice = createSlice({
  name: "searchName",
  initialState,
  reducers: {
    getSearchedName: (state, action: PayloadAction<string>) => {
      state.searchedName = action.payload;
    },
  },
});

export const { getSearchedName } = searchNameSlice.actions;
export default searchNameSlice.reducer;
