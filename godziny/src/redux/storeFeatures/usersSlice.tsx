import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ModelUser } from "../../sharedModels/modelUser";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";

type ModelInitialState = {
  users: ModelUser[] | null | undefined;
  usersError: FetchBaseQueryError | SerializedError | undefined;
  usersIsLoading: boolean;
};

const initialState: ModelInitialState = {
  users: null,
  usersError: undefined,
  usersIsLoading: false,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (
      state,
      action: PayloadAction<ModelUser[] | null | undefined>
    ) => {
      state.users = action.payload;
    },
    getUsersError: (
      state,
      action: PayloadAction<FetchBaseQueryError | SerializedError | undefined>
    ) => {
      state.usersError = action.payload;
    },
    getUsersIsLoading: (state, action: PayloadAction<boolean>) => {
      state.usersIsLoading = action.payload;
    },
  },
});

export const { getUsers, getUsersError, getUsersIsLoading } =
  usersSlice.actions;
export default usersSlice.reducer;
