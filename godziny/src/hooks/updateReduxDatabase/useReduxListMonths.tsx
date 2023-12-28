import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getListMonths,
  getListMonthsError,
} from "../../redux/storeFeatures/listMonthsSlice";
import useDatabaseListMonths from "../../services/useDatabaseListMonths";

const useReduxListMonths = () => {
  const dispatch = useDispatch();
  const { databaseListMonths, error } = useDatabaseListMonths();

  useEffect(() => {
    dispatch(getListMonths(databaseListMonths));
    dispatch(getListMonthsError(error));
  }, [databaseListMonths, dispatch]);
};

export default useReduxListMonths;
