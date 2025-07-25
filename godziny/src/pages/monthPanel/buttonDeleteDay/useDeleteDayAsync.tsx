import useMonthQuery from "../../../hooks/useMonthQuery";
import useURLValues from "../../../hooks/useURLValues";
import { useDeleteDayMutation } from "../../../services/apiSliceMonths";
import { ModelDay } from "../../../sharedModels/modelDay";

const useDeleteDayAsync = (day: any, columnIndex: number) => {
  const { data: month } = useMonthQuery();
  const [deleteDay, success] = useDeleteDayMutation();
  const { yearFromURL, monthFromURL } = useURLValues();

  const deleteDayAsync = async () => {
    if (!month) return;

    const columnType = ["submitted", "accepted", "rejected"][columnIndex];
    const dayHours = columnType === "rejected" ? 0 : day?.hours;

    const calcHours = {
      ...month.hours,
      currentHours: month.hours.currentHours + dayHours,
      [columnType + "Hours"]: month.hours[columnType + "Hours"] - day?.hours,
    };

    month &&
      (await deleteDay({
        year: yearFromURL,
        month: monthFromURL,
        monthBody: {
          dayId: day._id,
          columnType,
          calcHours,
        },
      }));
  };

  return { deleteDayAsync, success };
};

export default useDeleteDayAsync;
