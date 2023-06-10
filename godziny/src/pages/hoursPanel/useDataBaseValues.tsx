import { useState, useEffect } from "react";
import {
  useColumnsQuery,
  useAddDaysMutation,
  useUpdateColumnsMutation,
} from "../../services/apiSlice";
import { addDaysToEmptyColumns } from "./utils";
import { useDispatch } from "react-redux";
import { handleEidtisLoading } from "../../redux/storeFeatures/hoursPanelSlice";

const defaultValue = null;
interface DatabaseColumns {
  allHours: any;
  columns: any[];
}

const useDataBaseValues = (values: any = defaultValue) => {
  const dispatch = useDispatch();

  const { data, error } = useColumnsQuery(undefined);
  const [addDays, success] = useAddDaysMutation();
  const [updateColumns] = useUpdateColumnsMutation();

  const dataBaseColumnsId = data && Object.keys(data).join();

  const dataBaseAllData = data
    ? Object.values(data).flat()
    : ([] as DatabaseColumns[]);

  const dataBaseAllHours =
    data && dataBaseAllData.length > 0
      ? (dataBaseAllData[0] as any)?.allHours
      : "";

  const dataBasePendingHours =
    data && dataBaseAllData.length > 0
      ? (dataBaseAllData[0] as any)?.pendingHours
      : "";

  const dataBaseColumnsWithoutDays =
    data && dataBaseAllData.length > 0
      ? (dataBaseAllData[0] as any)?.columns
      : [];

  const databaseColumns = addDaysToEmptyColumns(dataBaseColumnsWithoutDays);

  const updatedColumnsWithAddedDays = data ? [...databaseColumns] : [];
  updatedColumnsWithAddedDays[0] = data &&
    dataBaseColumnsWithoutDays?.length > 0 && {
      ...databaseColumns?.[0],
      days: [...databaseColumns?.[0]?.days, ...[values]],
    };

  const newColumnsFromDatabase = data ? [...databaseColumns] : [];

  const usersHoursSum =
    data && dataBaseAllData.length > 0
      ? databaseColumns[0].days.reduce((sum: any, day: any) => {
          return sum + day?.hours;
        }, 0)
      : [];

  useEffect(() => {
    dispatch(handleEidtisLoading(success.isLoading));
  }, [success.isLoading, dispatch]);

  console.log("", usersHoursSum);

  return {
    dataBaseAllHours,
    dataBasePendingHours,
    dataBaseColumnsId,
    updatedColumnsWithAddedDays,
    newColumnsFromDatabase,
    databaseColumns,
    usersHoursSum,
    data,
    error,
    success,
    updateColumns,
    addDays,
  };
};

export default useDataBaseValues;
