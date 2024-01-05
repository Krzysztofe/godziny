import { ModelColumn } from "../../../sharedModels/modelColumn";
import { ModelCalcHours } from "../../../sharedModels/modelCalcHours";
import { ModelMonth } from "../../../sharedModels/modelMonth";
import {
  currMonthDigits,
  currYearDigits,
} from "../../../data/dataCurrentDates";

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

export const monthPattern: ModelMonth = {
  id: "",
  columns,
  calcHours,
};


export const dataInputs = [
  {
    value: "monthDate",
    type: "month",
    label: "Podaj miesiąc",
    isErrorPrint: true,
    min: `${currYearDigits}-${currMonthDigits}`,
    max: "2025-12",
  },
];
