import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { sortListMonths } from "../utils/sortListMonths";

const useMonthDates = () => {
  const { listMonths } = useSelector((state: RootState) => state.listMonths);

  const sortedInfoMonths =
    listMonths &&
    [...listMonths]?.sort((a: string, b: string) => {
      const dateA = new Date(a).getTime();
      const dateB = new Date(b).getTime();

      return dateA - dateB;
    });

  const databaseMonthsDatesToString = listMonths && [...listMonths]?.map(
    (monthDate: string) => {
      const monthToDateFormat = new Date(monthDate);
      return new Intl.DateTimeFormat("pl-PL", {
        year: "numeric",
        month: "long",
        timeZone: "UTC",
      }).format(monthToDateFormat);
    }
  );

  return { sortedInfoMonths, databaseMonthsDatesToString };
};

export default useMonthDates;
