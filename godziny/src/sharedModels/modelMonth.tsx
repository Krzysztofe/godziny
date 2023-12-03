import { ModelColumn } from "./modelColumn";
import { ModelCalcHours } from "./modelCalcHours";

export type ModelMonth = {
  id: string;
  columns: ModelColumn[];
  calcHours: ModelCalcHours;
};
