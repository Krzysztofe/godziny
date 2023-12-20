import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getMonth,
  getMonthError,
  getMonthIsLoading,
} from "../../redux/storeFeatures/monthPanelSlice";
import { useMonthDataQuery } from "../../services/apiSliceMonths";
import useURLValues from "../useURLValues";
import { auth } from "../../data/firebaseConfig";

const useReduxMonthData = () => {
  const dispatch = useDispatch();
  const { yearFromURL, monthFromURL } = useURLValues();
  const { isMonthInURL } = useURLValues();

  const yearx = isMonthInURL ? yearFromURL : "";
  const monthx = isMonthInURL ? monthFromURL : "";

  const { data, error, isLoading } = useMonthDataQuery({
    year: yearx,
    month: monthx,
  });



  useEffect(() => {
   
    dispatch(getMonth(data));

    dispatch(getMonthError(error));

    dispatch(getMonthIsLoading(isLoading));
    
  }, [data, error, isLoading, dispatch]);
};

export default useReduxMonthData;
