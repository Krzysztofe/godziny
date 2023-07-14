import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const initialState: any = {
  users: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state, action: PayloadAction<any>) => {
      state.users = action.payload;
    },
  },
});

export const { getUsers } = usersSlice.actions;
export default usersSlice.reducer;
