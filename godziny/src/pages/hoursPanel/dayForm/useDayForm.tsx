import { useFormik } from "formik";
import useDataBaseValues from "../useDataBaseValues";
import { addedColumnsWithDays, initialValues } from "./dataDayForm";
import { validationSchema } from "./validationDayForm";
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";

interface FormValues {
  date: string;
  hours: number | string;
  userName: string;
  place: string;
}

const useDayForm = () => {
  const { numberOfDays } = useSelector((state: RootState) => state.hoursPanel);

  const formik = useFormik<FormValues>({
    initialValues: initialValues,
    validationSchema: validationSchema,

    onSubmit: async values => {
      formik.setFieldValue("id", crypto.randomUUID());
      addedColumnsWithDays.columns[0].days = [values];

      data === null
        ? await addDays(addedColumnsWithDays)
        : await updateColumns({
            id: dataBaseColumnsId,
            columns: {
              allHours: dataBaseAllHours,
              pendingHours: usersHoursSum,
              columns: updatedColumnsWithAddedDays,
            },
          });
    },
  });

  const {
    dataBaseAllHours,
    dataBasePendingHours,
    dataBaseColumnsId,
    updatedColumnsWithAddedDays,
    data,
    usersHoursSum,
    success,
    updateColumns,
    addDays,
  } = useDataBaseValues(formik.values);

  // console.log("", success.isLoading);

  return { formik };
};

export default useDayForm;
