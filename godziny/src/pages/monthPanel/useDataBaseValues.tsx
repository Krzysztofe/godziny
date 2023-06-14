import { useColumnsQuery } from "../../services/apiSlice";
import { addDaysToColumns } from "./utils";

// const defaultValue = null;
interface DatabaseColumns {
  allHours: any;
  columns: any[];
}

interface DatabaseValues {
  data: any;
  databaseMonthsId: any;
  databaseMonthsCollection: any[];
  databaseMonth: any;
  databaseColumns: any;
  databaseAllHours: any;
  dataCurrentHours: any;
  databaseAcceptedHours: any;
  databaseRejectedHours: any;
  dataBaseSubmitedHours: any;
  acceptedHoursSum: any;
  rejectedHoursSum: any;
  submitedHoursSum: any;
  string: any[];
  databaseMonthsDates: any[];
}

const useDataBaseValues = (monthValue: any = null): DatabaseValues => {
  const { data } = useColumnsQuery(undefined);

  const databaseMonthsId = data && Object.keys(data);

  const databaseMonthsWithId =
    databaseMonthsId &&
    Object.values(data)
      .flat()
      .map((item: any, idx) => {
        return { ...item, id: databaseMonthsId[idx] };
      });

  const databaseMonthsCollection = addDaysToColumns(databaseMonthsWithId);

  const databaseMonth: any =
    data && databaseMonthsCollection.length > 0
      ? databaseMonthsCollection?.find(
          (month: any) => month.month === monthValue
        )
      : undefined;

  const databaseColumns = data && databaseMonth?.columns;

  // hours values

  const databaseAllHours = data ? databaseMonth?.allHours : "";
  const dataCurrentHours = data ? databaseMonth?.currentHours : "";
  const dataBaseSubmitedHours = data ? databaseMonth?.submitedHours : "";
  const databaseAcceptedHours = data ? databaseMonth?.acceptedHours : "";
  const databaseRejectedHours = data ? databaseMonth?.rejectedHours : "";

  // hours sums

  const submitedHoursSum =
    data && databaseMonthsCollection.length > 0 && databaseColumns?.[0].days
      ? databaseColumns?.[0].days.reduce((sum: any, day: any) => {
          return sum + day.hours;
        }, 0)
      : 0;

  const acceptedHoursSum =
    data && databaseMonthsCollection.length > 0 && databaseColumns?.[0].days
      ? databaseColumns?.[1].days.reduce((sum: any, day: any) => {
          return sum + day.hours;
        }, 0)
      : 0;

  const rejectedHoursSum =
    data && databaseMonthsCollection.length > 0 && databaseColumns?.[0].days
      ? databaseColumns?.[2].days.reduce((sum: any, day: any) => {
          return sum + day.hours;
        }, 0)
      : 0;

  // date transformation

  const databaseMonthsDates = databaseMonthsCollection.map((month: any) => {
    return month.month;
  });

  const string = databaseMonthsDates.map((monthDate: any) => {
    const monthToDateFormat = new Date(monthDate);
    return new Intl.DateTimeFormat("pl-PL", {
      year: "numeric",
      month: "long",
      timeZone: "UTC",
    }).format(monthToDateFormat);
  });

  return {
    string,
    data,
    databaseMonthsId,
    databaseMonthsCollection,
    databaseMonth,
    databaseColumns,
    databaseAllHours,
    dataCurrentHours,
    databaseAcceptedHours,
    databaseRejectedHours,
    dataBaseSubmitedHours,
    acceptedHoursSum,
    rejectedHoursSum,
    submitedHoursSum,
    databaseMonthsDates,
  };
};

export default useDataBaseValues;
