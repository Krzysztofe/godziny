import { useSelector } from "react-redux";
import { v4 as UUID } from "uuid";
import * as yup from "yup";
import { dateInNext14Days } from "../../data/dataCurrentDates";
import useURLValues from "../../hooks/useURLValues";
import { RootState } from "../../redux/store";
import { useAddDayMutation } from "../../services/apiSliceMonths";
import { ModelUser } from "../formUser/ModelUser";
import { validationSchema } from "./validationFormDay";

const useFormikDay = () => {
  const [addDay, success] = useAddDayMutation();
  const { month } = useSelector((state: RootState) => state.monthsPanel);
  const { users } = useSelector((state: RootState) => state.users);
  const firstColumn = month && month?.columns?.[0];
  const { yearFromURL, monthFromURL } = useURLValues();

  const initialValues = {
    id: "",
    date: dateInNext14Days,
    hours: "",
    userName: "Imię",
    place: "",
    userColor: "",
  };
  const validation = validationSchema as yup.ObjectSchema<typeof initialValues>;

  const onSubmit = async (values: any) => {
    if (
      month?.calc?.currentHours - +values.hours < 0 ||
      month?.calc?.currentHours === 0
    )
      return;

    const userColor = users?.find((user: ModelUser) => {
      return user.userName === values.userName;
    })?.userColor;

    const valuesToDatabase = {
      ...values,
      id: UUID(),
      hours: +values.hours,
      userColor: userColor || "",
    };

    await addDay({
      year: yearFromURL,
      month: monthFromURL,
      firstColumnBody: {
        ...month,
        calc: {
          ...month.calc,
          currentHours: month.calc.currentHours - valuesToDatabase.hours,
          submittedHours: month.calc.submittedHours + valuesToDatabase.hours,
        },

        columns: [
          {
            ...month.columns[0],
            days: month.columns[0].days
              ? [...month.columns[0].days, valuesToDatabase]
              : [valuesToDatabase],
          },
          ...month.columns.slice(1),
        ],
      },
    });
  };

  return { initialValues, validation, onSubmit, success };
};

export default useFormikDay;
