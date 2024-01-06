import useMonthDate from "../useMonthDate";
import { RootState } from "../../../../redux/store";
import { useSelector } from "react-redux";
import { setCollapseIndex } from "../../../../redux/storeFeatures/listMonthsSlice";
import { useDispatch } from "react-redux";
import { useDeleteMonthMutation } from "../../../../services/apiSliceMonths";
import { useEffect } from "react";
import { getUpdateMonthError } from "../../../../redux/storeFeatures/monthPanelSlice";

const useDeleteMonthAsync = (monthIdx: number) => {
  const dispatch = useDispatch();
  const { monthDate } = useMonthDate(monthIdx);
  const { listMonths } = useSelector((state: RootState) => state.listMonths);
  const [deleteMonth, success] = useDeleteMonthMutation();

  const deleteMonthAsync = async () => {
    if (monthDate && listMonths?.includes(monthDate)) {
      dispatch(setCollapseIndex(-1));
      const year = monthDate.slice(0, 4);
      const month = monthDate.slice(-2);
      await deleteMonth({ year: year, month: month });
    }
  };
  useEffect(() => {
    dispatch(getUpdateMonthError(success.isError));
  }, [success.isError]);


  return { deleteMonthAsync, success };
};

export default useDeleteMonthAsync;
