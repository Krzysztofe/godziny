import { ModelColumn } from "../../../../sharedModels/modelColumn";
import { ModelMonth } from "../../../../sharedModels/modelMonth";

export const findDayInColumn = (
  monthColumn: any | undefined,
  findName: string,
  findDate: string
) => {
  return monthColumn?.find((day: any) => {
    const { userName, date } = day || {};
    return (userName || "") === findName && date === findDate;
  });
};

export const validationFormDayDate = (
  month: any | undefined,
  findName: string,
  findDate: string
) => {
  let error = "";

  if (month && findDayInColumn(month?.columns.submitted, findName, findDate)) {
    error = "Dzień złożony";
  } else if (
    month &&
    findDayInColumn(month?.columns.accepted, findName, findDate)
  ) {
    error = "Dzień przyznany";
  }

  return error;
};
