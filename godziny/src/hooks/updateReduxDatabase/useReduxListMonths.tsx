import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getListMonths,
  getListMonthsError,
} from "../../redux/storeFeatures/listMonthsSlice";
import { useAllMonthsQuery } from "../../services/apiSliceMonths";

const useReduxListMonths = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("token");

  const { data: months, error } = useAllMonthsQuery(undefined, {
    skip: !jwt,
  });

  useEffect(() => {
    if (!jwt || !months) return;

    const monthsLabels = months.map(
      (item) => `${item.year}-${String(item.month).padStart(2, "0")}`
    );

    dispatch(getListMonths(monthsLabels));
    dispatch(getListMonthsError(error));
  }, [months]);
};

export default useReduxListMonths;


