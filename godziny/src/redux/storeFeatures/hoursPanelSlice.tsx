import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ModelCalc, ModelColumn, ModelMonthPattern } from "../../components/sidebar/sidebarMonthForm/dataSidebarMonthForm";


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
  month: monthPattern,
  numberOfDays: "",
  dataFromBack: [],
  requestStates: {
    edit: { isLoading: false, isError: false },
    delete: {
      isLoading: false,
      isError: false,
    },
  },
};

export const hoursPanelSlice = createSlice({
  name: "hoursPanel",
  initialState,
  reducers: {
    getMonth: (state, action: PayloadAction<any>) => {
      state.month = action.payload;
    },

    handleChange: (state, action: PayloadAction<any>) => {
      state.numberOfDays = action.payload;
    },
    getData: (state, action: PayloadAction<any>) => {
      const tt = action.payload ? Object.values(action.payload) : [];
      state.dataFromBack = tt.flat();
    },
    handleEidtisLoading: (state, action: PayloadAction<boolean>) => {
      state.requestStates.edit.isLoading = action.payload;
    },
  },
});

export const { getMonth, handleChange, getData, handleEidtisLoading } =
  hoursPanelSlice.actions;
export default hoursPanelSlice.reducer;
