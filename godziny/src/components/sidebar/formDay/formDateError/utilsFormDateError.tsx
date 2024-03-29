import { ModelColumn } from "../../../../sharedModels/modelColumn";
import { ModelMonth } from "../../../../sharedModels/modelMonth";

export const findDayInColumn = (
  monthColumn: ModelColumn | undefined,
  findName: string,
  findDate: string
) => {
  return (
    monthColumn?.days &&
    monthColumn?.days?.find(day => {
      const { userName, date } = day || {};

      return (userName || "") === findName && date === findDate;
    })
  );
};

export const validationFormDayDate = (
  month: ModelMonth | undefined,
  findName: string,
  findDate: string
) => {
  let error = "";

  if (month && findDayInColumn(month?.columns[0], findName, findDate)) {
    error = "Dzień złożony";
  } else if (month && findDayInColumn(month?.columns[1], findName, findDate)) {
    error = "Dzień przyznany";
  }

  return error;
};
