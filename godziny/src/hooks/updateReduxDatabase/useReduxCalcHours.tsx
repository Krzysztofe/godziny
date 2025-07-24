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


  console.log('calcHoursxxx',calcHours)

  useEffect(() => {  
    dispatch(getCalcHours(calcHours?.hours));
    dispatch(getCalcHoursError(error));
    dispatch(getCalcHoursIsLoading(isLoading));
  }, [calcHours, error, isLoading, dispatch]);
};

export default useReduxCalcHours;
