import { createSlice } from "@reduxjs/toolkit";
import {
  ModelCalc,
  ModelColumn,
  ModelMonthPattern,
} from "../../components/someData/dataSidebarMonthForm";

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

interface ModelInitialState {
  month: ModelMonthPattern;
  error: {};
  isLoading: boolean;
}

const initialState: ModelInitialState = {
  month: monthPattern,
  error: {},
  isLoading: false,
};

export const monthsPanelSlice = createSlice({
  name: "monthsPanel",
  initialState,
  reducers: {
    getMonth: (state, action) => {
      state.month = action.payload;
    },
    getMonthError: (state, action) => {
      state.error = action.payload;
    },

    getMonthIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { getMonth, getMonthError, getMonthIsLoading } =
  monthsPanelSlice.actions;
export default monthsPanelSlice.reducer;
