import { useSelector } from "react-redux";
import { ModelDay } from "../components/sidebar/sidebarMonthForm/dataSidebarMonthForm";
import { addDaysToColumns } from "../pages/monthPanel/utilsMonthPanelColumns";
import { RootState } from "../redux/store";

const useHoursSum = () => {

 const { month } = useSelector((state: RootState) => state.monthsPanel);

  let submittedHoursSum = 0;
  let acceptedHoursSum = 0;
  let rejectedHoursSum = 0;

 
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
 
};

export default useHoursSum;
