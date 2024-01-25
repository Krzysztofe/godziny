import { useDeleteDayMutation } from "../../../services/apiSliceMonths";
import { ModelDay } from "../../../sharedModels/modelDay";
import useURLValues from "../../../hooks/useURLValues";
import { deleteDayById, calculateUpdatedCalcHours } from "./utilsDeleteDay";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const useDeleteDayAsync = (day: ModelDay, columnIndex: number) => {
  const { month } = useSelector((state: RootState) => state.monthPanel);
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
