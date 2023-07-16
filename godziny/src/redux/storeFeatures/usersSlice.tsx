import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  users: [],
  usersError: {},
  usersIsLoading: false
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state, action) => {
      state.users = action.payload;
    },
    getUsersError: (state, action) => {
      state.usersError = action.payload;
    },
    getUsersIsLoading: (state, action) => {
      state.usersIsLoading = action.payload;
    },
  },
});

export const { getUsers, getUsersError, getUsersIsLoading } = usersSlice.actions;
export default usersSlice.reducer;
