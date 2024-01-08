import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useCalcHoursQuery } from "../../services/apiSliceMonths";
import {
  getCalcHours,
  getCalcHoursError,
  getCalcHoursIsLoading,
} from "../../redux/storeFeatures/calcHursSlice";

const useReduxCalcHours = (yearValue: string, monthValue: string) => {
  const dispatch = useDispatch();
  const {
    data: calcHours,
    isLoading,
    error,
  } = useCalcHoursQuery({
    year: yearValue ?? "",
    month: monthValue ?? "",
  });
  useEffect(() => {
    dispatch(getCalcHours(calcHours));

    dispatch(getCalcHoursError(error));

    dispatch(getCalcHoursIsLoading(isLoading));
  }, [calcHours, error, isLoading, dispatch]);
};

export default useReduxCalcHours;
