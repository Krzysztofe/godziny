import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ModelUser } from "../../sharedModels/modelUser";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";

type ModelInitialState = {
  listUsers: ModelUser[] | null | undefined;
  listUsersError: FetchBaseQueryError | SerializedError | undefined;
  listUsersIsLoading: boolean;
};

const initialState: ModelInitialState = {
  listUsers: null,
  listUsersError: undefined,
  listUsersIsLoading: false,
};

export const listUsersSlice = createSlice({
  name: "listUsers",
  initialState,
  reducers: {
    geListtUsers: (
      state,
      action: PayloadAction<ModelUser[] | null | undefined>
    ) => {
      state.listUsers = action.payload;
    },
    getListUsersError: (
      state,
      action: PayloadAction<FetchBaseQueryError | SerializedError | undefined>
    ) => {
      state.listUsersError = action.payload;
    },
    getListUsersIsLoading: (state, action: PayloadAction<boolean>) => {
      state.listUsersIsLoading = action.payload;
    },
  },
});

export const { geListtUsers, getListUsersError, getListUsersIsLoading } =
  listUsersSlice.actions;
export default listUsersSlice.reducer;
