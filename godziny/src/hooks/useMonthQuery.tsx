import { useMonthDataQuery } from "../services/apiSliceMonths";
import useURLValues from "./useURLValues";

const useMonthQuery = () => {
  const { yearFromURL: year, monthFromURL: month } = useURLValues();
  

  const { data, error, isLoading } = useMonthDataQuery({
    year,
    month,
  });

  return { data, error, isLoading };
};

export default useMonthQuery;
