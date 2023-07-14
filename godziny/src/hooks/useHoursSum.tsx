import useURLValues from "./useURLValues";
import {
  useColumnsDataQuery,
} from "../services/apiSliceMonths";
import { addDaysToColumns } from "../pages/monthPanel/utilsMonthPanelColumns";
import { ModelDay } from "../components/sidebar/sidebarMonthForm/dataSidebarMonthForm";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

const useHoursSum = () => {
  const { yearFromURL, monthFromURL } = useURLValues();
  const { data: dataColumns } = useColumnsDataQuery({
    year: yearFromURL,
    month: monthFromURL,
  });

 const { month } = useSelector((state: RootState) => state.hoursPanel);

  let submittedHoursSum = 0;
  let acceptedHoursSum = 0;
  let rejectedHoursSum = 0;

  if (dataColumns) {
    const columnsWithDays = addDaysToColumns(month?.columns);

    for (const column of columnsWithDays) {
      const columnDays = column.days || [];
      const columnHoursSum = columnDays.reduce(
        (sum: number, day: ModelDay | null) => {
          const dayHours = day?.hours ?? 0;
          return sum + dayHours;
        },
        0
      );

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
