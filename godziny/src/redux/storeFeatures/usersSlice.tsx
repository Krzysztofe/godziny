import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ModelUser } from "../../sharedModels/modelUser";

type ModelInitialState = {
  users: ModelUser[];
  usersError: {};
  usersIsLoading: boolean;
};

const initialState: ModelInitialState = {
  users: [],
  usersError: {},
  usersIsLoading: false,
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
