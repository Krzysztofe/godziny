import { configureStore } from "@reduxjs/toolkit";
import { reactionsApiSlice } from "../services/apiSlice";
import hoursPanelSlice from "./storeFeatures/hoursPanelSlice";

export const store = configureStore({
  reducer: {
    hoursPanel: hoursPanelSlice,
    [reactionsApiSlice.reducerPath]: reactionsApiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(reactionsApiSlice.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
