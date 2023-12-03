import { ModelDay } from "../sharedModels/modelDay";
import { ModelColumn } from "../sharedModels/modelColumn";

const getHoursFromColumn = (days: ModelDay[]) => {
  return days?.reduce((acu, day) => {
    const dayHours = day?.hours || 0;
    return acu + dayHours;
  }, 0);
};

const getHoursFromColumns = (columns: ModelColumn[]) => {
  const submittedHours = getHoursFromColumn(columns[0]?.days);
  const acceptedHours = getHoursFromColumn(columns[1]?.days);
  const rejectedHours = getHoursFromColumn(columns[2]?.days);

  return { submittedHours, acceptedHours, rejectedHours };
};

export default getHoursFromColumns;
