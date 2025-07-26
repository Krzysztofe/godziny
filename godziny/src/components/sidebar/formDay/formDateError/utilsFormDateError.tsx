import { ModelMonth } from "../../../../sharedModels/modelMonth";
import { ModelDay } from "../../../../sharedModels/modelDay";

export const findDayInColumn = (
  monthColumn: ModelDay[] | undefined,
  findName: string,
  findDate: string
) => {
  return monthColumn?.find((day) => {
    const { userName, date } = day || {};
    return (userName || "") === findName && date === findDate;
  });
};

export const validationFormDayDate = (
  month: ModelMonth | undefined,
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
