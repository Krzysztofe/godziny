import { useFormik } from "formik";
import {
  useAddUserMutation,
  useUsersQuery,
} from "../../../services/apiSliceUsers";
import * as yup from "yup";

export interface ModelUser {
  id: string;
  userName: string;
  userColor: string;
}

const useUserSettingsFormik = () => {
  const [addUser, success] = useAddUserMutation();
  const { data: dataUsers } = useUsersQuery();

  const usersNames = dataUsers?.map(({ userName }: ModelUser) => userName);
  const UsersColors = dataUsers?.map(({ userColor }: ModelUser) => userColor);

  const formik = useFormik<ModelUser>({
    initialValues: {
      id: "",
      userName: "",
      userColor: "#e0cce1",
    },
    validationSchema: yup.object({
      userName: yup
        .string()
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
    }),

    onSubmit: async (values, { resetForm }) => {
      const updatedValues = {
        ...values,
        id: crypto.randomUUID(),
      };

      if (dataUsers) {
        await addUser([...dataUsers, updatedValues]);
      } else {
        await addUser([updatedValues]);
      }
      resetForm();
    },
  });

  return { formik, success };
};

export default useUserSettingsFormik;
