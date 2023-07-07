import useURLValues from "../../../hooks/useURLValues";
import { useMonthDataQuery } from "../../../services/apiSlice";
import { addDaysToEmptyColumns } from "../utils";

const useHoursCalc = () => {
  const { yearFromURL, monthFromURL } = useURLValues();
  const { data: dataMonth } = useMonthDataQuery({
    year: yearFromURL,
    month: monthFromURL,
  });

  const columnsWithDays = addDaysToEmptyColumns(dataMonth?.columns);

console.log("ff", columnsWithDays);

  const submittedHoursSum =
    dataMonth &&
    columnsWithDays &&
    columnsWithDays[0]?.days?.reduce((sum: number, day: any) => {
      const dayHours = day === null ? 0 : day?.hours;
      return sum + dayHours;
    }, 0);

  const acceptedHoursSum =
    dataMonth &&
    columnsWithDays &&
    columnsWithDays[1]?.days?.reduce((sum: number, day: any) => {
      return sum + day?.hours;
    }, 0);

  const rejectedHoursSum =
    dataMonth &&
    columnsWithDays &&
    columnsWithDays[2]?.days?.reduce((sum: number, day: any) => {
      return sum + day?.hours;
    }, 0);

  return { submittedHoursSum, acceptedHoursSum, rejectedHoursSum };
};

export default useHoursCalc;
