import { ModelColumn } from "../../../sharedModels/modelColumn";

export const addDaysToColumns = (columns: ModelColumn[]) => {
  if (!Array.isArray(columns)) {
    return [];
  }
  return columns?.map((column: ModelColumn) => {
    if (!column?.hasOwnProperty("days")) {
      return { ...column, days: [] };
    }
    return column;
  });
};
