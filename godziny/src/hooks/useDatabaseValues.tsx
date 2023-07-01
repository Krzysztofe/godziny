import { useMonthsDataQuery } from "../services/apiSlice";
import { addDaysToColumns } from "../pages/monthPanel/utils";

interface DatabaseValues {
  data: any;
  error?: {};
  isLoading: boolean;
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
  databaseMonthsDates: string[];
  databaseMonthsDatesSorted: any;
  databaseMonthsDatesToString: string[];
}

const useDatabaseValues = (monthURL: any = null): DatabaseValues => {
  const { data, error, isLoading } = useMonthsDataQuery(undefined);

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
          (month: any) => month.monthDate === monthURL
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
      ? databaseColumns?.[0]?.days.reduce((sum: any, day: any) => {
          return sum + day?.hours;
        }, 0)
      : 0;

  const acceptedHoursSum =
    data && databaseMonthsCollection.length > 0 && databaseColumns?.[0].days
      ? databaseColumns?.[1]?.days.reduce((sum: any, day: any) => {
          return sum + day?.hours;
        }, 0)
      : 0;

   
  const rejectedHoursSum =
    data && databaseMonthsCollection.length > 0 && databaseColumns?.[0].days 
      ? databaseColumns?.[2]?.days.reduce((sum: any, day: any) => {
          return sum + day?.hours;
        }, 0)
      : 0;

  // dates transformation
  const databaseMonthsDates =
    data && databaseMonthsCollection
      ? databaseMonthsCollection.map(month => month.monthDate)
      : [];

  const databaseMonthsDatesSorted = data
    ? databaseMonthsDates.sort((date1: any, date2: any) => {
        if (date1 < date2) {
          return -1;
        } else if (date1 > date2) {
          return 1;
        } else {
          return 0;
        }
      })
    : [];


  const databaseMonthsDatesToString = databaseMonthsDatesSorted.map(
    (monthDate: any) => {
      const monthToDateFormat = new Date(monthDate);
      return new Intl.DateTimeFormat("pl-PL", {
        year: "numeric",
        month: "long",
        timeZone: "UTC",
      }).format(monthToDateFormat);
    }
  );

  return {
    data,
    error,
    isLoading,
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
    databaseMonthsDatesSorted,
    databaseMonthsDatesToString,
  };
};

export default useDatabaseValues;
