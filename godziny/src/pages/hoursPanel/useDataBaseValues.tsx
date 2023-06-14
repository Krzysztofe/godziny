import { useDispatch } from "react-redux";
import {
  useAddDaysMutation,
  useColumnsQuery,
  useUpdateColumnsMutation,
} from "../../services/apiSlice";
import { addDaysToColumns, addDaysToEmptyColumns } from "./utils";

const defaultValue = null;
interface DatabaseColumns {
  allHours: any;
  columns: any[];
}

const useDataBaseValues = (monthValue: any = defaultValue) => {
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

  

  return {
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
  };
};

export default useDataBaseValues;
