import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const useMonthDates = () => {
  const { listMonths } = useSelector((state: RootState) => state.listMonths);

  const databaseMonthsDatesToString =
    listMonths &&
    [...listMonths]?.map((monthDate: string) => {
      const monthToDateFormat = new Date(monthDate);
      return new Intl.DateTimeFormat("pl-PL", {
        year: "numeric",
        month: "long",
        timeZone: "UTC",
      }).format(monthToDateFormat);
    });

  return { databaseMonthsDatesToString };
};

export default useMonthDates;
