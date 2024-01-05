import { useDeleteDayMutation } from "../../../../services/apiSliceMonths";
import useFindDay from "./useFindDay";
import { ModelDay } from "../../../../sharedModels/modelDay";
import useURLValues from "../../../../hooks/useURLValues";
import { deleteDayById, calculateUpdatedCalcHours } from "../utilsClumnsDay";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

const useDeleteDayAsync = (
  day: ModelDay,
  columnIndex: number,
  dayId: string
) => {
  const { month } = useSelector((state: RootState) => state.monthPanel);
  const [deleteDay, success] = useDeleteDayMutation();
  const { findDay } = useFindDay(day, columnIndex);
  const { yearFromURL, monthFromURL } = useURLValues();

  const deleteDayAsync = async () => {
    // if (day?.id === dayId) {
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

            columns: deleteDayById({ ...month }, dayId).columns,
          },
        }));
    // }
  };

  return { deleteDayAsync, success };
};

export default useDeleteDayAsync;
