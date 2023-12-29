import { ModelColumn } from "../../../sharedModels/modelColumn";
import { ModelCalcHours } from "../../../sharedModels/modelCalcHours";
import { ModelMonth } from "../../../sharedModels/modelMonth";

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
