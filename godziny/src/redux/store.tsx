import { configureStore } from "@reduxjs/toolkit";
import monthPanelSlice from "./storeFeatures/monthPanelSlice";
import listMonthsSlice from "./storeFeatures/listMonthsSlice";
import alertSlice from "./storeFeatures/alertSlice";
import searchNameSlice from "./storeFeatures/searchNameSlice";
import calcHursSlice from "./storeFeatures/calcHursSlice";
import requestSuccessSlice from "./storeFeatures/requestSuccessSlice";
import { usersApiSlice } from "../services/apiSliceUsers";
import { monthsApiSlice } from "../services/apiSliceMonths";

export const store = configureStore({
  reducer: {
    monthPanel: monthPanelSlice,
    listMonths: listMonthsSlice,
    alert: alertSlice,
    calcHours: calcHursSlice,
    requestSuccess: requestSuccessSlice,
    searchName: searchNameSlice,
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
