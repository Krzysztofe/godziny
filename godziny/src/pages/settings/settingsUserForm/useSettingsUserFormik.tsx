import { useFormik } from "formik";
import {
  useAddUserMutation,
  useUsersQuery,
} from "../../../services/apiSliceUsers";
import * as yup from "yup";
import useValidationSettingsUserForm from "./useValidationSettingsUserForm";

export interface ModelUser {
  id: string;
  userName: string;
  userColor: string;
}

const useUserSettingsFormik = () => {
  const [addUser, success] = useAddUserMutation();
  const { validationSchema } = useValidationSettingsUserForm();
  const { data: dataUsers } = useUsersQuery();

  const users = dataUsers || []

  const formik = useFormik<ModelUser>({
    initialValues: {
      id: "",
      userName: "",
      userColor: "#e0cce1",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const updatedValues = {
        ...values,
        id: crypto.randomUUID(),
      };

      if (dataUsers) {
        await addUser([...users, updatedValues]);
      } else {
        await addUser([updatedValues]);
      }
      resetForm();
    },
  });

  return { formik, success };
};

export default useUserSettingsFormik;
