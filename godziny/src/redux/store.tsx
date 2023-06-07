import { configureStore } from "@reduxjs/toolkit";
import { columnsApiSlice } from "../services/apiSlice";
import hoursPanelSlice from "./storeFeatures/hoursPanelSlice";

export const store = configureStore({
  reducer: {
    hoursPanel: hoursPanelSlice,
    [columnsApiSlice.reducerPath]: columnsApiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(columnsApiSlice.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
