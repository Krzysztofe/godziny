import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ModelInitialState {
  numberOfDays: any;
  data: any;
  requestStates: {
    edit: { isLoading: boolean; isError: boolean };
    delete: { isLoading: boolean; isError: boolean };
  };
}

const initialState: any = {
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

export const { handleChange, getData, handleEidtisLoading } = hoursPanelSlice.actions;
export default hoursPanelSlice.reducer;
