import { configureStore } from "@reduxjs/toolkit";
import { monthsApiSlice } from "../services/apiSliceMonths";
import monthsPanelSlice from "./storeFeatures/monthsPanelSlice";
import usersSlice from "./storeFeatures/usersSlice";
import infoMonthsSlice from "./storeFeatures/infoMonthsSlice";
import { usersApiSlice } from "../services/apiSliceUsers";

export const store = configureStore({
  reducer: {
    monthsPanel: monthsPanelSlice,
    users: usersSlice,
    infoMonths: infoMonthsSlice,
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
