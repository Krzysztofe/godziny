import { useFormik } from "formik";
import {
  useAddUserMutation,
  useUsersQuery,
} from "../../../services/apiSliceUsers";
import useValidationSettingsUserForm from "./useValidationSettingsUserForm";
import { v4 as UUID } from "uuid";

export interface ModelUser {
  id: string;
  userName: string;
  userColor: string;
}

const useUserSettingsFormik = () => {
  const [addUser, success] = useAddUserMutation();
  const { validationSchema } = useValidationSettingsUserForm();
  const { data: dataUsers } = useUsersQuery();

  const users = dataUsers || [];

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
        userName:
          values.userName.slice(0, 1).toUpperCase() + values.userName.slice(1),
        id: UUID(),
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
