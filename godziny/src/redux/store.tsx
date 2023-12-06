import { configureStore } from "@reduxjs/toolkit";
import { monthsApiSlice } from "../services/apiSliceMonths";
import monthPanelSlice from "./storeFeatures/monthPanelSlice";
import usersSlice from "./storeFeatures/usersSlice";
import listMonthsSlice from "./storeFeatures/listMonthsSlice";
import { usersApiSlice } from "../services/apiSliceUsers";

export const store = configureStore({
  reducer: {
    monthPanel: monthPanelSlice,
    users: usersSlice,
    listMonths: listMonthsSlice,
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
