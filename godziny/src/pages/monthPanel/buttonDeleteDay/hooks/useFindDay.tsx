import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { ModelDay } from "../../../../sharedModels/modelDay";

const useFindDay = (day: ModelDay, columnIdx: number) => {
  const { month } = useSelector((state: RootState) => state.monthPanel);

  const findDay = {
    ...month?.columns[columnIdx].days?.find(dayInList => {
      return dayInList?.id === day?.id;
    }),
  };
  return { findDay };
};

export default useFindDay;
