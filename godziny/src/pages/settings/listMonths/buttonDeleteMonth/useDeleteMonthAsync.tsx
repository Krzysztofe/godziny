import useMonthDate from "../useMonthDate";
import { RootState } from "../../../../redux/store";
import { useSelector } from "react-redux";
import { setCollapseIndex } from "../../../../redux/storeFeatures/listMonthsSlice";
import { useDispatch } from "react-redux";
import { useDeleteMonthMutation } from "../../../../services/apiSliceMonths";
import { useEffect } from "react";
import { getUpdateMonthError } from "../../../../redux/storeFeatures/monthPanelSlice";

const useDeleteMonthAsync = (monthIdx: string) => {
  const dispatch = useDispatch();
  // const { monthDate } = useMonthDate(monthIdx);
  const { listMonths } = useSelector((state: RootState) => state.listMonths);

  const [deleteMonth, success] = useDeleteMonthMutation();

  const deleteMonthAsync = async () => {
  

    await deleteMonth(monthIdx);
  };
  // useEffect(() => {
  //   dispatch(getUpdateMonthError(success.isError));
  // }, [success.isError]);

  return { deleteMonthAsync, success };
};

export default useDeleteMonthAsync;
