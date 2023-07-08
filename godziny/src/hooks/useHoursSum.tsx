import useURLValues from "./useURLValues";
import { useMonthDataQuery } from "../services/apiSlice";
import { addDaysToColumns } from "../pages/monthPanel/utilsMonthPanelColumns";
// import { ModelDay } from "../components/sidebar/sidebarMonthForm/dataSidebarMonthForm";

interface ModelDay {
  id: string;
  userName: string;
  date: string;
  hours: number;
  place: string;
}

const useHoursSum = () => {
  const { yearFromURL, monthFromURL } = useURLValues();
  const { data: dataMonth } = useMonthDataQuery({
    year: yearFromURL,
    month: monthFromURL,
  });

  if (dataMonth) {
    const columnsWithDays = addDaysToColumns(dataMonth?.columns);

    const submittedHoursSum =
      dataMonth &&
      columnsWithDays &&
      columnsWithDays[0]?.days?.reduce((sum: number, day: ModelDay | null) => {
        const dayHours = day?.hours ?? 0;
        return sum + dayHours;
      }, 0);

    const acceptedHoursSum =
      dataMonth &&
      columnsWithDays &&
      columnsWithDays[1]?.days?.reduce((sum: number, day: ModelDay | null) => {
        const dayHours = day?.hours ?? 0;
        return sum + dayHours;
      }, 0);

    const rejectedHoursSum =
      dataMonth &&
      columnsWithDays &&
      columnsWithDays[2]?.days?.reduce((sum: number, day: ModelDay | null) => {
        const dayHours = day?.hours ?? 0;
        return sum + dayHours;
      }, 0);

    return { submittedHoursSum, acceptedHoursSum, rejectedHoursSum };
  } else {
    const submittedHoursSum = 0;
    const acceptedHoursSum = 0;
    const rejectedHoursSum = 0;
    return { submittedHoursSum, acceptedHoursSum, rejectedHoursSum };
  }
};

export default useHoursSum;
