import { PayloadAction, SerializedError, createSlice } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { ModelMonth } from "../../sharedModels/modelMonth";

type ModelInitialState = {
  month: null | undefined | ModelMonth;
  monthErrorGet: FetchBaseQueryError | SerializedError | undefined;
  updateMonthError: any;
  monthIsLoading: boolean;
};

const initialState: ModelInitialState = {
  month: null,
  monthErrorGet: {},
  updateMonthError: "",
  monthIsLoading: false,
};

export const monthPanelSlice = createSlice({
  name: "monthPanel",
  initialState,
  reducers: {
    getMonth: (state, action: PayloadAction<null | undefined | ModelMonth>) => {
      state.month = action.payload;
    },
    getMonthError: (
      state,
      action: PayloadAction<FetchBaseQueryError | SerializedError | undefined>
    ) => {
      state.monthErrorGet = action.payload;
    },
    getUpdateMonthError: (
      state,
      action: PayloadAction<any>
    ) => {
      state.updateMonthError = action.payload;
    },
    getMonthIsLoading: (state, action: PayloadAction<boolean>) => {
      state.monthIsLoading = action.payload;
    },
  },
});

export const { getMonth, getMonthError, getUpdateMonthError, getMonthIsLoading } =
  monthPanelSlice.actions;
export default monthPanelSlice.reducer;
