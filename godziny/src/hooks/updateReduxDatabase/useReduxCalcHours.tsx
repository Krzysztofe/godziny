import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useCalcHoursQuery } from "../../services/apiSliceMonths";
import {
  getCalcHours,
  getCalcHoursError,
  getCalcHoursIsLoading,
} from "../../redux/storeFeatures/calcHoursSlice";

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


  console.log('calcHours',calcHours)

  useEffect(() => {  

    console.log('calcHours',calcHours)
    dispatch(getCalcHours(calcHours));
    dispatch(getCalcHoursError(error));
    dispatch(getCalcHoursIsLoading(isLoading));
  }, [calcHours, error, isLoading, dispatch]);
};

export default useReduxCalcHours;
