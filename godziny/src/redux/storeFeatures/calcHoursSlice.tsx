import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ModelCalcHours } from "../../sharedModels/modelCalcHours";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";

type ModelInitialState = {
  calcHours: any | null | undefined;
  calcHoursError: FetchBaseQueryError | SerializedError | undefined;
  calcHoursIsLoading: boolean;
};

const initialState: ModelInitialState = {
  calcHours: null,
  calcHoursError: undefined,
  calcHoursIsLoading: false,
};

export const calcHoursSlice = createSlice({
  name: "calcHours",
  initialState,
  reducers: {
    getCalcHours: (
      state,
      action: PayloadAction<any | null | undefined>
    ) => {
      state.calcHours = action.payload;
    },
    getCalcHoursError: (
      state,
      action: PayloadAction<FetchBaseQueryError | SerializedError | undefined>
    ) => {
      state.calcHoursError = action.payload;
    },
    getCalcHoursIsLoading: (state, action: PayloadAction<boolean>) => {
      state.calcHoursIsLoading = action.payload;
    },
  },
});

export const { getCalcHours, getCalcHoursError, getCalcHoursIsLoading } =
  calcHoursSlice.actions;
export default calcHoursSlice.reducer;
