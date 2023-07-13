import { useFormik } from "formik";
import { dateInNext14Days } from "../../../data/dataCurrentDates";
import {
  useAddDayMutation,
  useCalcDataQuery,
  useFirstColumnDataQuery,
} from "../../../services/apiSlice";
import { validationSchema } from "./validationSidebarDayFormik";
import useURLValues from "../../../hooks/useURLValues";
import { useUsersQuery } from "../../../services/apiSliceUsers";

interface ModelDay {
  id: string;
  date: string;
  hours: string;
  userName: string;
  place: string;
  userColor: string;
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

  const { data: dataUsers } = useUsersQuery();

// const getUser = dataUsers?.filter((user: any) => {
//   return user?.userName === props.day?.userName;
// });
// const backgroundColor = getUser?.userColor;


  const formik = useFormik<ModelDay>({
    initialValues: {
      id: crypto.randomUUID(),
      date: dateInNext14Days,
      hours: "",
      userName: "",
      place: "",
      userColor:""
    },
    validationSchema: validationSchema,

    onSubmit: async values => {
      formik.setFieldValue("id", crypto.randomUUID());
      if (
        dataCalc?.currentHours &&
        dataCalc?.currentHours - +formik.values.hours < 0
      )
        return;

      const userColor = dataUsers?.find((user: any) => {
        return user?.userName === values.userName;
      }).userColor


      const valuesToDatabase = {
        ...values,
        hours: +values.hours,
        userColor: userColor,
      };

      if (dataFirstColumn?.id) {
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
      }
    },
  });

  return { formik, success };
};

export default useSidebarDayFormik;
