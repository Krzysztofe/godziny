import { ModelMonth } from "../../../sharedModels/modelMonth";
import { ModelColumn } from "../../../sharedModels/modelColumn";

export const deleteDayById = (obj: ModelMonth, idToDelete: string) => {
  const updatedColumns = obj.columns.map((column: ModelColumn) => {
    const updatedDays = column?.days?.filter(day => day.id !== idToDelete);
    return { ...column, days: updatedDays };
  });
  return { ...obj, columns: updatedColumns };
};

export const calculateUpdatedCalcHours = (
  month: ModelMonth | null,
  columnIdx: number,
  subtractedHours: number | undefined
) => {
  if (!month || !month.calcHours) {
     return {
       currentHours: 0,
       submittedHours: 0,
       acceptedHours: 0,
       rejectedHours: 0,
       allHours: 0,
     };
  }

  const { calcHours } = month;

  return {
    ...calcHours,
    currentHours:
      columnIdx !== 2 && subtractedHours
        ? calcHours.currentHours + subtractedHours
        : calcHours.currentHours,
    submittedHours:
      columnIdx === 0 && subtractedHours
        ? calcHours.submittedHours - subtractedHours
        : calcHours.submittedHours,
    acceptedHours:
      columnIdx === 1 && subtractedHours
        ? calcHours.acceptedHours - subtractedHours
        : calcHours.acceptedHours,
    rejectedHours:
      columnIdx === 2 && subtractedHours
        ? calcHours.rejectedHours - subtractedHours
        : calcHours.rejectedHours,
  };
};