import * as yup from "yup";
import { useUsersQuery } from "../../../services/apiSliceUsers";
import { ModelUser } from "../../../sharedModels/modelUser";

const useValidationFormUser = () => {
  const { data: listUsers } = useUsersQuery();
  const usersNames = listUsers?.map(({ userName }: ModelUser) => userName);
  const UsersColors = listUsers?.map(({ userColor }: ModelUser) => userColor);

  const validationSchema = yup.object({
    userName: yup
      .string()
      .transform((value, originalValue) =>
        typeof originalValue === "string" ? originalValue.trim() : originalValue
      )
      .min(3, "Min. 3 litery")
      .max(20, "Max. 20 liter")
      .test(
        "is-in-database",
        "Imię zajęte",
        value =>
          value !== undefined &&
          !usersNames?.includes(value.charAt(0).toUpperCase() + value.slice(1))
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
