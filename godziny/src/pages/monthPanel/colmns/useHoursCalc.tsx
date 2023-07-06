import useURLValues from "../../../hooks/useURLValues";
import { useMonthDataQuery } from "../../../services/apiSlice";
import { addDaysToEmptyColumns } from "../utils";

const useHoursCalc = () => {
  const { monthURL, yearFromURL, monthFromURL } = useURLValues();
  const { data: dataMonth } = useMonthDataQuery({
    year: yearFromURL,
    month: monthFromURL,
  });

  const columnsWithDays = addDaysToEmptyColumns(dataMonth?.columns);

  const submittedHoursSum = columnsWithDays[0]?.days.reduce(
    (sum: number, day: any) => {
      return sum + day.hours;
    },
    0
  );

  const acceptedHoursSum = columnsWithDays[1]?.days.reduce(
    (sum: number, day: any) => {
      return sum + day.hours;
    },
    0
  );

  const rejectedHoursSum = columnsWithDays[2]?.days.reduce(
    (sum: number, day: any) => {
      return sum + day.hours;
    },
    0
  );


  return { submittedHoursSum, acceptedHoursSum, rejectedHoursSum };
};

export default useHoursCalc;
