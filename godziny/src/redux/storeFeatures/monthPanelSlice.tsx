import { PayloadAction, SerializedError, createSlice } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { ModelMonth } from "../../sharedModels/modelMonth";

type ModelInitialState = {
  month: null | undefined | ModelMonth;
  error: FetchBaseQueryError | SerializedError | undefined;
  isLoading: boolean;
};

const initialState: ModelInitialState = {
  month: null,
  error: {},
  isLoading: false,
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
      state.error = action.payload;
    },
    getMonthIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { getMonth, getMonthError, getMonthIsLoading } =
  monthPanelSlice.actions;
export default monthPanelSlice.reducer;
