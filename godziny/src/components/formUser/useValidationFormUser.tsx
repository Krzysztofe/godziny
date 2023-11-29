import { useUsersQuery } from "../../services/apiSliceUsers";
// import { ModelUser } from './useSettingsUserFormik';
import * as yup from "yup";

export interface ModelUser {
  id: string;
  userName: string;
  userColor: string;
}

const useValidationFormUser = () => {
  const { data: dataUsers } = useUsersQuery();

  const usersNames = dataUsers?.map(({ userName }: ModelUser) => userName);
  const UsersColors = dataUsers?.map(({ userColor }: ModelUser) => userColor);

  const validationSchema = yup.object({
    userName: yup
      .string()
      .min(3, "Min. 3 litery")
      .max(10, "Max. 10 liter")
      .test(
        "is-in-database",
        "Imię zajęte",
        value => value !== undefined && !usersNames?.includes(value)
      )
      .required("Imię wymagane"),
    userColor: yup
      .string()
      .test(
        "is-in-database",
        "Kolor zajęty",
        value => value !== undefined && !UsersColors?.includes(value)
      ),
  });

  return { validationSchema };
};

export default useValidationFormUser;
