import { useFormik } from "formik";
import { dateInNext14Days } from "../../../data/dataCurrentDates";
import {
  useAddDayMutation,
  useCalcDataQuery,
  useFirstColumnDataQuery,
} from "../../../services/apiSlice";
import { validationSchema } from "./validationSidebarDayFormik";
import useURLValues from "../../../hooks/useURLValues";
// import { ModelDay } from "../sidebarMonthForm/dataSidebarMonthForm";

interface ModelDay {
  id: string;
  date: string;
  hours: string;
  userName: string;
  place: string;
}

const useSidebarDayFormik = () => {
  const { yearFromURL, monthFromURL } = useURLValues();

  const [addDay, success] = useAddDayMutation();

  const { data: dataCalc } = useCalcDataQuery({
    year: yearFromURL,
    month: monthFromURL,
  });

  const { data: dataFirstColumn } = useFirstColumnDataQuery({
    year: yearFromURL,
    month: monthFromURL,
  });

  const formik = useFormik<ModelDay>({
    initialValues: {
      id: crypto.randomUUID(),
      date: dateInNext14Days,
      hours: "",
      userName: "",
      place: "",
    },
    validationSchema: validationSchema,

    onSubmit: async values => {
      formik.setFieldValue("id", crypto.randomUUID());
      if (
        dataCalc?.currentHours &&
        dataCalc?.currentHours - +formik.values.hours < 0
      )
        return;

      const valuesToDatabase = { ...values, hours: +values.hours };

      await addDay({
        year: yearFromURL,
        month: monthFromURL,
        firstColumnBody: {
          ...dataFirstColumn,
          days: dataFirstColumn?.days
            ? [...dataFirstColumn.days, { ...valuesToDatabase }]
            : [{ ...valuesToDatabase }],
        },
      });
    },
  });

  return { formik, success };
};

export default useSidebarDayFormik;
