import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getMonth,
  getMonthError,
  getMonthIsLoading,
} from "../../redux/storeFeatures/monthPanelSlice";
import { useMonthDataQuery } from "../../services/apiSliceMonths";
import useURLValues from "../useURLValues";

const useReduxMonthData = () => {
  const dispatch = useDispatch();
  const { yearFromURL, monthFromURL } = useURLValues();

  const { data, error, isLoading } = useMonthDataQuery({
    year: yearFromURL,
    month: monthFromURL,
  });

  useEffect(() => {
    dispatch(getMonth(data));

    dispatch(getMonthError(error));

    dispatch(getMonthIsLoading(isLoading));
  }, [data, error, isLoading, dispatch]);
};

export default useReduxMonthData;
