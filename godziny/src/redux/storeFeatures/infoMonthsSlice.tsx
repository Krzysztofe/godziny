import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  ModelCalc,
  ModelColumn,
  ModelMonthPattern,
} from "../../components/sidebar/sidebarMonthForm/dataSidebarMonthForm";

interface ModelInitialState {
  numberOfDays: any;
  data: any;
  requestStates: {
    edit: { isLoading: boolean; isError: boolean };
    delete: { isLoading: boolean; isError: boolean };
  };
}

const columns: ModelColumn[] = [
  { id: "submitted", days: [] },
  { id: "accepted", days: [] },
  { id: "rejected", days: [] },
];

const calc: ModelCalc = {
  allHours: 0,
  currentHours: 0,
  submittedHours: 0,
  acceptedHours: 0,
  rejectedHours: 0,
};

const monthPattern: ModelMonthPattern = {
  id: "",
  columns,
  calc,
};

const initialState: any = {
  infoMonths: [],
  infoMonthsError: {},
  infoMonthsIsLoading: false,
};

export const infoMonthsSlice = createSlice({
  name: "infoMonths",
  initialState,
  reducers: {
    getInfoMonths: (state, action: PayloadAction<any>) => {
      state.infoMonths = action.payload;
    },
    getInfoMonthError: (state, action: PayloadAction<any>) => {
      state.infoMonthsError = action.payload;
    },

    getInfoMonthIsLoading: (state, action: PayloadAction<any>) => {
      state.infoMonthsIsLoading = action.payload;
    },
  },
});

export const { getInfoMonths, getInfoMonthError, getInfoMonthIsLoading } =
  infoMonthsSlice.actions;
export default infoMonthsSlice.reducer;
