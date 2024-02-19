import { v4 as UUID } from "uuid";
import * as yup from "yup";
import { dateInNext_14_Days } from "../../../../data/dataCurrentDates";
import useMonthQuery from "../../../../hooks/useMonthQuery";
import useURLValues from "../../../../hooks/useURLValues";
import { useAddDayMutation } from "../../../../services/apiSliceMonths";
import { useUsersQuery } from "../../../../services/apiSliceUsers";
import { ModelUser } from "../../../../sharedModels/modelUser";
import { validationFormDayDate } from "../formDateError/utilsFormDateError";
import { validationSchema } from "./validationFormDay";

export type ModelInitialValuesFormikDay = {
  id: string;
  date: string;
  hours: string;
  userName: string;
  place: string;
  userColor: string;
};

const useFormikDay = () => {
  const [addDay, success] = useAddDayMutation();
  const { data: month } = useMonthQuery();
  const { data: listUsers } = useUsersQuery();
  const { yearFromURL, monthFromURL } = useURLValues();

  const initialValues = {
    id: "",
    date: dateInNext_14_Days,
    hours: "",
    userName: "",
    place: "",
    userColor: "",
  };

  const validation = validationSchema as yup.ObjectSchema<typeof initialValues>;

  const onSubmit = async (values: ModelInitialValuesFormikDay) => {
    const error =
      month && validationFormDayDate(month, values.userName, values.date);

    if (month && error) {
      return;
    }

    if (
      month &&
      (month?.calcHours?.currentHours - +values.hours < 0 ||
        month?.calcHours?.currentHours === 0)
    )
      return;

    const userColor =
      listUsers &&
      listUsers?.find((user: ModelUser) => {
        return user.userName === values.userName;
      })?.userColor;

    const valuesToDatabase = {
      ...values,
      id: UUID(),
      hours: +values.hours,
      userColor: userColor || "",
    };

    month &&
      (await addDay({
        year: yearFromURL,
        month: monthFromURL,
        monthBody: {
          ...month,
          calcHours: {
            ...month?.calcHours,
            currentHours: month.calcHours.currentHours - valuesToDatabase.hours,
            submittedHours:
              month.calcHours.submittedHours + valuesToDatabase.hours,
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
      }));
  };

  return { initialValues, validation, onSubmit, success };
};

export default useFormikDay;
