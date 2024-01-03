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
  const { isMonthInURL } = useURLValues();

  const year = isMonthInURL ? yearFromURL : "";
  const month = isMonthInURL ? monthFromURL : "";

  const { data, error, isLoading } = useMonthDataQuery({
    year,
    month,
  });

  useEffect(() => {
    dispatch(getMonth(data));
    dispatch(getMonthError(error));
    dispatch(getMonthIsLoading(isLoading));
  }, [data, error, isLoading, dispatch]);
};

export default useReduxMonthData;
