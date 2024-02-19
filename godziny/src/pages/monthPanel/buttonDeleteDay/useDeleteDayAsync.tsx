import useMonthQuery from "../../../hooks/useMonthQuery";
import useURLValues from "../../../hooks/useURLValues";
import { useDeleteDayMutation } from "../../../services/apiSliceMonths";
import { ModelDay } from "../../../sharedModels/modelDay";
import { calculateUpdatedCalcHours, deleteDayById } from "./utilsDeleteDay";

const useDeleteDayAsync = (day: ModelDay, columnIndex: number) => {
  const { data: month } = useMonthQuery();
  const [deleteDay, success] = useDeleteDayMutation();
  const { yearFromURL, monthFromURL } = useURLValues();

  const deleteDayAsync = async () => {
    const subtractedHours = day?.hours;

    month &&
      (await deleteDay({
        year: yearFromURL,
        month: monthFromURL,
        colIdx: columnIndex,
        monthBody: {
          ...month,
          calcHours: calculateUpdatedCalcHours(
            month,
            +columnIndex,
            subtractedHours
          ),
          columns: deleteDayById({ ...month }, day?.id).columns,
        },
      }));
  };

  return { deleteDayAsync, success };
};

export default useDeleteDayAsync;
