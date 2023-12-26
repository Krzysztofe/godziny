import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getListMonths,
  getListMonthsError,
  getListMonthsIsLoading,
} from "../../redux/storeFeatures/listMonthsSlice";
import useDatabaseListMonths from "../useDatabaseListMonths";

const useReduxListMonths = () => {
  const dispatch = useDispatch();
  const { databaseListMonths, error } = useDatabaseListMonths();

  useEffect(() => {
    dispatch(getListMonths(databaseListMonths));
    // dispatch(getListMonths(data));
    // dispatch(getListMonthsError(error));

    // dispatch(getListMonthsIsLoading(isLoading));
  }, [databaseListMonths, dispatch]);
};

export default useReduxListMonths;
