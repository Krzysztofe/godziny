import { configureStore } from "@reduxjs/toolkit";
import { monthsApiSlice } from "../services/apiSliceMonths";
import hoursPanelSlice from "./storeFeatures/hoursPanelSlice";
import usersSlice from "./storeFeatures/usersSlice";
import { usersApiSlice } from "../services/apiSliceUsers";

export const store = configureStore({
  reducer: {
    hoursPanel: hoursPanelSlice,
    users: usersSlice,
    [monthsApiSlice.reducerPath]: monthsApiSlice.reducer,
    [usersApiSlice.reducerPath]: usersApiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      monthsApiSlice.middleware,
      usersApiSlice.middleware
    ),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
