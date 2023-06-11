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
      // if (dataCurrentHours <= 0 || values.hours > dataCurrentHours) return;
      formik.setFieldValue("id", crypto.randomUUID());
      addedColumnsWithDays.columns[0].days = [values];

      updatedColumnsWithAddedDays[0] = data &&
        dataBaseColumnsWithoutDays?.length > 0 && {
          ...databaseColumns?.[0],
          days: [...databaseColumns?.[0]?.days, ...[values]],
        };

      data === null
        ? await addDays(addedColumnsWithDays)
        : await updateColumns({
            id: databaseColumnsId,
            columns: {
              allHours: databaseAllHours,
              currentHours: databaseAllHours - submitedHoursSum,
              submitedHours: submitedHoursSum,
              acceptedHours: acceptedHoursSum,
              rejectedHpurs: rejectedHoursSum,
              columns: updatedColumnsWithAddedDays,
            },
          });
    },
  });

  const {
    databaseAllHours,
    dataCurrentHours,
    dataBaseSubmitedHours,
    dataBaseColumnsWithoutDays,
    databaseColumns,
    databaseColumnsId,
    updatedColumnsWithAddedDays,
    acceptedHoursSum,
    rejectedHoursSum,
    data,
    submitedHoursSum,
    success,
    updateColumns,
    addDays,
  } = useDataBaseValues(formik.values);

  // console.log("", success.isLoading);

  return { formik };
};

export default useDayForm;
