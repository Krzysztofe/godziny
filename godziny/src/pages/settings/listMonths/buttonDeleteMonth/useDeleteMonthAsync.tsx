import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUpdateMonthError } from "../../../../redux/storeFeatures/monthPanelSlice";
import { useDeleteMonthMutation } from "../../../../services/apiSliceMonths";

const useDeleteMonthAsync = (monthIdx: string) => {
  const dispatch = useDispatch();

  const [deleteMonth, success] = useDeleteMonthMutation();

  const deleteMonthAsync = async () => {
      await deleteMonth(monthIdx);
  };
  
  useEffect(() => {
    dispatch(getUpdateMonthError(success.isError));
  }, [success.isError]);

  return { deleteMonthAsync, success };
};

export default useDeleteMonthAsync;
