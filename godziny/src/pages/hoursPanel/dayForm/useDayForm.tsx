import { useFormik } from "formik";
import useDataBaseValues from "../useDataBaseValues";
import { addedColumnsWithDays, initialValues } from "./dataDayForm";
import { validationSchema } from "./validationDayForm";
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
interface FormValues {
  date: string;
  hours: number | string;
  userName: string;
  place: string;
}

const useDayForm = () => {
  const { numberOfDays } = useSelector((state: RootState) => state.hoursPanel);
  const { monthValue } = useParams();

  const formik = useFormik<FormValues>({
    initialValues: initialValues,
    validationSchema: validationSchema,

    onSubmit: async values => {
      formik.setFieldValue("id", crypto.randomUUID());

      const columnsWithAddedDays = data && [...databaseColumnsNew];

      columnsWithAddedDays[0] = data && {
        ...databaseColumnsNew?.[0],
        days: [...databaseColumnsNew?.[0]?.days, ...[values]],
      };

      await updateColumns({
        id: data && databaseMonthNew.id,
        columns: {
          ...databaseMonthNew,
          columns: columnsWithAddedDays,
        },
      });
    },
  });

  const {
    databaseMonthsCollection,
    databaseDataWithId,
    // databaseColumnsUtils,
    databaseAllData,
    // databaseColumnsNewCopy,
    databaseColumnsNew,
    databaseAllHours,
    dataCurrentHours,
    databaseMonthNew,
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
    databaseColumnsIdxxx,
    // databaseMonthsCollection,
  } = useDataBaseValues(monthValue);
  // console.log("form", data && databaseMonthNew);

  return { formik };
};

export default useDayForm;
