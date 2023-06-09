import { useFormik } from "formik";
import {
  useAddDaysMutation,
  useColumnsQuery,
  useUpdateColumnsMutation,
} from "../../../services/apiSlice";

import { addDaysToEmptyColumns } from "../utils";
import { initialValues, columnsWithAddedDays } from "./dataDayForm";
import { validationSchema } from "./validationDayForm";

interface FormValues {
  date: string;
  hours: number | string;
  userName: string;
  place: string;
}

const useDayForm = () => {
  const { data, error } = useColumnsQuery(undefined);
  const [addDays, success] = useAddDaysMutation();
  const [updateColumns] = useUpdateColumnsMutation();

  const formik = useFormik<FormValues>({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async values => {
      const columnsIdFRomDatabase = data && Object.keys(data).join();
      const columnsFromDatabase = data ? Object.values(data).flat() : [];
      const columnsToPrint = addDaysToEmptyColumns(columnsFromDatabase);
      const updatedColumns = data ? [...columnsToPrint] : [];

      formik.setFieldValue("id", crypto.randomUUID());
      columnsWithAddedDays[0].days = [values];

      updatedColumns[0] = data &&
        columnsFromDatabase?.length > 0 && {
          ...columnsToPrint?.[0],
          days: [...columnsToPrint?.[0]?.days, ...[values]],
        };

      data === null
        ? await addDays(columnsWithAddedDays)
        : await updateColumns({
            id: columnsIdFRomDatabase,
            columns: updatedColumns,
          });
    },
  });

  return { formik };
};

export default useDayForm;
