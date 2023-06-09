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

const useDataBaseValues = (values: any = defaultValue) => {
  const dispatch = useDispatch();

  const { data, error } = useColumnsQuery(undefined);
  const [addDays, success] = useAddDaysMutation();
  const [updateColumns] = useUpdateColumnsMutation();

  const columnsIdFRomDatabase = data && Object.keys(data).join();
  const columnsFromDatabase = data ? Object.values(data).flat() : [];
  const columnsToPrint = addDaysToEmptyColumns(columnsFromDatabase);
  const updatedColumns = data ? [...columnsToPrint] : [];

  updatedColumns[0] = data &&
    columnsFromDatabase?.length > 0 && {
      ...columnsToPrint?.[0],
      days: [...columnsToPrint?.[0]?.days, ...[values]],
    };

  useEffect(() => {
    dispatch(handleEidtisLoading(success.isLoading));
  }, [success.isLoading, dispatch]);


//   console.log("use", isLoading);
  return {
    columnsIdFRomDatabase,
    updatedColumns,
    data,
    error,
    success,
  
    updateColumns,
    addDays,
  };
};

export default useDataBaseValues;
