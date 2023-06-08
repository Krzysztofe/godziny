import React from "react";
import { useFormik } from "formik";
import { initialValues } from "./dataDayForm";
import { validationSchema } from "./validationDayForm";
import {
  useUpdateDayMutation,
  useColumnsQuery,
} from "../../../services/apiSlice";
import { addDaysToEmptyColumns } from "../utils";

interface FormValues {
  date: string;
  hours: number;
  userName: string;
  //   location: string;
  //   [key: string]: string | string[];
}

const useDayForm = (dayId: any) => {
  const [updateDay] = useUpdateDayMutation();
  const { data, error } = useColumnsQuery(undefined);
  const columnsIdFRomDatabase = data && Object.keys(data).join();
  const columnsFromDatabase = data ? Object.values(data).flat() : [];
  const columnsToPrint = addDaysToEmptyColumns(columnsFromDatabase);
  const updatedColumnsx = data ? [...columnsToPrint] : [];

  const formik = useFormik<FormValues>({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async values => {
      const newValues = { ...values, id: dayId };

      const updatedColumnsWithFilteredDayFormik = updatedColumnsx.map(
        (column: any) => {
          if (column && column.days) {
            return {
              ...column,
              days: column.days.map((day: any) => {
                return day.id === dayId ? newValues : day;
              }),
            };
          }
          return column;
        }
      );
      console.log("upday", updatedColumnsWithFilteredDayFormik);

      await updateDay({
        id: columnsIdFRomDatabase,
        columns: updatedColumnsWithFilteredDayFormik,
      });
    },
  });

  return { formik };
};

export default useDayForm;
