import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useURLValues from "../../hooks/useURLValues";
import {
  getMonth,
  getMonthError,
  getMonthIsLoading,
} from "../../redux/storeFeatures/monthsPanelSlice";
import { useMonthDataQuery } from "../../services/apiSliceMonths";

const useReduxMonthBody = () => {
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

export default useReduxMonthBody;
