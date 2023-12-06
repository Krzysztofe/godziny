import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getListMonths,
  getListMonthsError,
  getListMonthsIsLoading,
} from "../../redux/storeFeatures/listMonthsSlice";
import { useListMonthsQuery } from "../../services/apiSliceMonths";

const useReduxListMonths = () => {
  const dispatch = useDispatch();

  const { data, error, isLoading } = useListMonthsQuery();

  useEffect(() => {
    dispatch(getListMonths(data));

    dispatch(getListMonthsError(error));

    dispatch(getListMonthsIsLoading(isLoading));
  }, [data, error, isLoading, dispatch]);
};

export default useReduxListMonths;
