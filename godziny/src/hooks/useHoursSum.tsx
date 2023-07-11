import useURLValues from "./useURLValues";
import { useMonthDataQuery } from "../services/apiSlice";
import { addDaysToColumns } from "../pages/monthPanel/utilsMonthPanelColumns";
import { ModelDay } from "../components/sidebar/sidebarMonthForm/dataSidebarMonthForm";

const useHoursSum = () => {
  const { yearFromURL, monthFromURL } = useURLValues();
  const { data: dataMonth } = useMonthDataQuery({
    year: yearFromURL,
    month: monthFromURL,
  });

  let submittedHoursSum = 0;
  let acceptedHoursSum = 0;
  let rejectedHoursSum = 0;

  if (dataMonth?.id) {
    const columnsWithDays = addDaysToColumns(dataMonth?.columns);

    for (const column of columnsWithDays) {
      const columnDays = column.days || [];
      const columnHoursSum = columnDays.reduce((sum: number, day: ModelDay | null) => {
        const dayHours = day?.hours ?? 0;
        return sum + dayHours;
      }, 0);

      switch (column.id) {
        case "submitted":
          submittedHoursSum = columnHoursSum;
          break;
        case "accepted":
          acceptedHoursSum = columnHoursSum;
          break;
        case "rejected":
          rejectedHoursSum = columnHoursSum;
          break;
        default:
          break;
      }
    }
    return { submittedHoursSum, acceptedHoursSum, rejectedHoursSum };
  } else {
    const submittedHoursSum = 0;
    const acceptedHoursSum = 0;
    const rejectedHoursSum = 0;
    return { submittedHoursSum, acceptedHoursSum, rejectedHoursSum };
  }
};

export default useHoursSum;