import { useUsersQuery } from "../../services/apiSliceUsers";
import * as yup from "yup";

import { ModelUser } from "../../sharedModels/modelUser";

const useValidationFormUser = () => {
  const { data: dataUsers } = useUsersQuery();

  const usersNames = dataUsers?.map(({ userName }: ModelUser) => userName);
  const UsersColors = dataUsers?.map(({ userColor }: ModelUser) => userColor);

  const validationSchema = yup.object({
    userName: yup
      .string()
      .min(3, "Min. 3 litery")
      .max(20, "Max. 20 liter")
      .test(
        "is-in-database",
        "Imię zajęte",
        value =>
          value !== undefined &&
          !usersNames?.includes(value[0].toUpperCase() + value.slice(1))
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
