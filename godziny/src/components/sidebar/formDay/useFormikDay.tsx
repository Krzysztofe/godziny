import { useSelector } from "react-redux";
import { dateInNext14Days } from "../../../data/dataCurrentDates";
import { validationSchema } from "./validationFormDay";
import * as yup from "yup";
import { RootState } from "../../../redux/store";
import { ModelUser } from "../../formUser/ModelUser";
import { v4 as UUID } from "uuid";
import { useAddDayMutation } from "../../../services/apiSliceMonths";
import useURLValues from "../../../hooks/useURLValues";

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
        ...firstColumn,
        days: firstColumn?.days
          ? [...firstColumn.days, valuesToDatabase]
          : [valuesToDatabase],
      },
    });
  };

  return { initialValues, validation, onSubmit, success };
};

export default useFormikDay;
