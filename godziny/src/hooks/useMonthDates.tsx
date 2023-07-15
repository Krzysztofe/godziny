import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const useMonthDates = () => {
  const { infoMonths } = useSelector((state: RootState) => state.infoMonths);

  const databaseMonthsDatesToString = infoMonths?.map((monthDate: string) => {
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
