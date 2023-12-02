import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    getInfoMonthError,
    getInfoMonthIsLoading,
    getInfoMonths,
} from "../../redux/storeFeatures/infoMonthsSlice";
import { useMonthsListQuery } from "../../services/apiSliceMonths";

const useReduxListMonths = () => {
  const dispatch = useDispatch();

  const {
    data: dataInfoMonths,
    error: errorInfoMonths,
    isLoading: isLoadingInfoMonths,
  } = useMonthsListQuery();

  useEffect(() => {
    dispatch(getInfoMonths(dataInfoMonths));
    dispatch(getInfoMonthError(errorInfoMonths));
    dispatch(getInfoMonthIsLoading(isLoadingInfoMonths));
  }, [dataInfoMonths, errorInfoMonths, isLoadingInfoMonths, dispatch]);
};

export default useReduxListMonths;
