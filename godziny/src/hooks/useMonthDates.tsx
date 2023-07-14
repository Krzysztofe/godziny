import { useMonthsDataQuery } from "../services/apiSliceMonths";

const useMonthDates = () => {
  const { data: dataMonths } = useMonthsDataQuery(undefined);

  const monthDates =
    dataMonths &&
    Object.values(dataMonths).flatMap(year =>
      Object.values(year).flatMap(month => month.id)
    );

  const databaseMonthsDatesToString = monthDates?.map((monthDate: string) => {
    const monthToDateFormat = new Date(monthDate);
    return new Intl.DateTimeFormat("pl-PL", {
      year: "numeric",
      month: "long",
      timeZone: "UTC",
    }).format(monthToDateFormat);
  });

  return { monthDates, databaseMonthsDatesToString };
};

export default useMonthDates;
