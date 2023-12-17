import { useSelector } from "react-redux";
import { v4 as UUID } from "uuid";
import * as yup from "yup";
import { dateInNext_14_Days } from "../../data/dataCurrentDates";
import useURLValues from "../../hooks/useURLValues";
import { RootState } from "../../redux/store";
import { useAddDayMutation } from "../../services/apiSliceMonths";
import { validationSchema } from "./validationFormDay";
import { ModelUser } from "../../sharedModels/modelUser";

type ModelInitialValues = {
  id: string;
  date: string;
  hours: string;
  userName: string;
  place: string;
  userColor: string;
};

const useFormikDay = () => {
  const [addDay, success] = useAddDayMutation();
  const { month } = useSelector((state: RootState) => state.monthPanel);
  const { listUsers } = useSelector((state: RootState) => state.listUsers);
  const { yearFromURL, monthFromURL } = useURLValues();

  const initialValues = {
    id: "",
    date: dateInNext_14_Days,
    hours: "",
    userName: "Imię",
    place: "",
    userColor: "",
  };

  const validation = validationSchema as yup.ObjectSchema<typeof initialValues>;

  const onSubmit = async (values: ModelInitialValues) => {
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