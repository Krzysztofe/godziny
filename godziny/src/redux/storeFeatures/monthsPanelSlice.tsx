import { createSlice } from "@reduxjs/toolkit";
import {
  ModelCalcHours,
  ModelColumn,
  ModelMonth,
} from "../../components/someData/dataSidebarMonthForm";

const columns: ModelColumn[] = [
  { id: "submitted", days: [] },
  { id: "accepted", days: [] },
  { id: "rejected", days: [] },
];

const calcHours: ModelCalcHours = {
  allHours: 0,
  currentHours: 0,
  submittedHours: 0,
  acceptedHours: 0,
  rejectedHours: 0,
};

const monthPattern: ModelMonth = {
  id: "",
  columns,
  calcHours,
};

interface ModelInitialState {
  month: ModelMonth;
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
