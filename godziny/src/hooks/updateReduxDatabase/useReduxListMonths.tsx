import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getListMonths,
  getListMonthsError,
  getListMonthsIsLoading,
} from "../../redux/storeFeatures/listMonthsSlice";
import { useListMonthsQuery } from "../../services/apiSliceMonths";
import useDatabaseListMonths from "../useDatabaseListMonths";

const useReduxListMonths = () => {
  const dispatch = useDispatch();
  const { databaseKeysYears, isError } = useDatabaseListMonths();



  useEffect(() => {
    dispatch(getListMonths(databaseKeysYears));
    // dispatch(getListMonths(data));
    // dispatch(getListMonthsError(error));

    // dispatch(getListMonthsIsLoading(isLoading));
  }, [databaseKeysYears, dispatch]);
};

export default useReduxListMonths;
