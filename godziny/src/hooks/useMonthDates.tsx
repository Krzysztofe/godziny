import { useMonthsDataQuery } from "../services/apiSlice";

const useMonthDates = () => {
    const { data } = useMonthsDataQuery(undefined);
    
  const monthDates =
    data &&
    Object.values(data).flatMap(year =>
      Object.values(year).flatMap(month => month.id)
    );
  return { monthDates };
};

export default useMonthDates;
