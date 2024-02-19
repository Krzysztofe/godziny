import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getListMonths,
  getListMonthsError,
} from "../../redux/storeFeatures/listMonthsSlice";
import useDatabaseListMonths from "../../services/useDatabaseListMonths";

const useReduxListMonths = () => {
  const dispatch = useDispatch();
  const { listMonths, error } = useDatabaseListMonths();

  useEffect(() => {
    dispatch(getListMonths(listMonths));
    dispatch(getListMonthsError(error));
  }, [listMonths, dispatch]);
};

export default useReduxListMonths;
