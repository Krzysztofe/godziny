import { useDispatch } from "react-redux";
import {
  useAddDaysMutation,
  useColumnsQuery,
  useUpdateColumnsMutation,
} from "../../services/apiSlice";
import { addDaysToEmptyColumns } from "./utils";

const defaultValue = null;
interface DatabaseColumns {
  allHours: any;
  columns: any[];
}

const useDataBaseValues = (valuesFromFormik: any = defaultValue) => {
  const dispatch = useDispatch();

  const { data, error } = useColumnsQuery(undefined);
 const [addDays, success] = useAddDaysMutation();
  const [updateColumns] = useUpdateColumnsMutation();

  const databaseColumnsId = data && Object.keys(data).join();

  const databaseAllData = data
    ? Object.values(data).flat()
    : ([] as DatabaseColumns[]);

  const databaseAllHours =
    data && databaseAllData.length > 0
      ? (databaseAllData[0] as any)?.allHours
      : "";

  const dataCurrentHours =
    data && databaseAllData.length > 0
      ? (databaseAllData[0] as any)?.currentHours
      : "";

  const dataBaseSubmitedHours =
    data && databaseAllData.length > 0
      ? (databaseAllData[0] as any)?.submitedHours
      : "";

  const databaseAccepteddHours =
    data && databaseAllData.length > 0
      ? (databaseAllData[0] as any)?.acceptedHours
      : "";

  const databaseRejectedHours =
    data && databaseAllData.length > 0
      ? (databaseAllData[0] as any)?.rejectedHpurs
      : "";

        const databaseMonth =
          data && databaseAllData.length > 0
            ? (databaseAllData[0] as any)?.month
            : "";

  const dataBaseColumnsWithoutDays =
    data && databaseAllData.length > 0
      ? (databaseAllData[0] as any)?.columns
      : [];

  const databaseColumns = addDaysToEmptyColumns(dataBaseColumnsWithoutDays);

  const updatedColumnsWithAddedDays =
    data && databaseAllData.length > 0 ? [...databaseColumns] : [];
  const newColumnsFromDatabase =
    data && databaseAllData.length > 0 ? [...databaseColumns] : [];

  const submitedHoursSum =
    data && databaseAllData.length > 0 && databaseColumns[0]?.days
      ? databaseColumns[0]?.days.reduce((sum: any, day: any) => {
          return sum + day.hours;
        }, 0)
      : 0;

  const acceptedHoursSum =
    data && databaseAllData.length > 0 && databaseColumns[1]?.days
      ? databaseColumns[1]?.days.reduce((sum: any, day: any) => {
          return sum + day.hours;
        }, 0)
      : 0;

  const rejectedHoursSum =
    data && databaseAllData.length > 0 && databaseColumns[2]?.days
      ? databaseColumns[2]?.days.reduce((sum: any, day: any) => {
          return sum + day.hours;
        }, 0)
      : 0;

  return {
    databaseAllHours,
    dataCurrentHours,
    databaseAccepteddHours,
    databaseRejectedHours,
    databaseAllData,
    acceptedHoursSum,
    databaseMonth,
    rejectedHoursSum,
    dataBaseSubmitedHours,
    databaseColumnsId,
    updatedColumnsWithAddedDays,
    dataBaseColumnsWithoutDays,
    newColumnsFromDatabase,
    databaseColumns,
    submitedHoursSum,
    data,
    error,
    success,
    updateColumns,
    addDays,
  };
};

export default useDataBaseValues;
