import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getListMonths,
  getListMonthsError,
} from "../../redux/storeFeatures/listMonthsSlice";
import { useAllMonthsQuery } from "../../services/apiSliceMonths";

const useReduxListMonths = () => {
  const dispatch = useDispatch();

  const { data: months, error } = useAllMonthsQuery();

  const monthsLabels = months?.map(
    (item) => `${item.year}-${String(item.month).padStart(2, "0")}`
  );

  useEffect(() => {
    dispatch(getListMonths(monthsLabels));
    dispatch(getListMonthsError(error));
  }, [months?.length, dispatch]);
};

export default useReduxListMonths;
