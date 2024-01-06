import { ModelColumn } from "../../../../sharedModels/modelColumn";
import { ModelMonth } from "../../../../sharedModels/modelMonth";

const findDayInColumn = (
  monthColumn: ModelColumn,
  findName: string,
  findDate: string
) => {
  return monthColumn?.days?.find(({ userName, date }) => {
    return userName === findName && date === findDate;
  });
};

export const validationFormDayDate = (
  month: ModelMonth,
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
