import { configureStore } from "@reduxjs/toolkit";
import { monthsApiSlice } from "../services/apiSlice";
import hoursPanelSlice from "./storeFeatures/hoursPanelSlice";

export const store = configureStore({
  reducer: {
    hoursPanel: hoursPanelSlice,
    [monthsApiSlice.reducerPath]: monthsApiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(monthsApiSlice.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
