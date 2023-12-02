import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useURLValues from "../useURLValues";
import {
  getMonth,
  getMonthError,
  getMonthIsLoading,
} from "../../redux/storeFeatures/monthsPanelSlice";
import { useMonthDataQuery } from "../../services/apiSliceMonths";

const useReduxMonthData = () => {
  const dispatch = useDispatch();
  const { yearFromURL, monthFromURL } = useURLValues();

  const {
    data: dataMonth,
    error: errorMonth,
    isLoading: isLoadingMonth,
  } = useMonthDataQuery({
    year: yearFromURL,
    month: monthFromURL,
  });

  useEffect(() => {
    dispatch(getMonth(dataMonth));
    dispatch(getMonthError(errorMonth));
    dispatch(getMonthIsLoading(isLoadingMonth));
  }, [dataMonth, errorMonth, isLoadingMonth, dispatch]);
  return {};
};

export default useReduxMonthData;
