import { ModelColumns } from "./modelColumns";
import { ModelCalcHours } from "./modelCalcHours";
import { ModelDay } from "./modelDay";

export type ModelMonth = {
  _id: string;
  year: number;
  month: number;
  columns: ModelColumns;
  hours: ModelCalcHours;
  __v: number;
};

export type ModelFormMonth = Omit<ModelMonth, "_id" | "__v">;
