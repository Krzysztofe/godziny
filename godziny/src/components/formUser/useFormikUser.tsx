import {
  useAddUserMutation,
  useUsersQuery,
} from "../../services/apiSliceUsers";
import useValidationUserForm from "./useValidationFormUser";
import { v4 as UUID } from "uuid";
import * as yup from "yup";
import { ModelUser } from "../../sharedModels/modelUser";
import { FormikHelpers } from "formik";

const useFormikUser = () => {
  const [addUser, success] = useAddUserMutation();
  const { validationSchema } = useValidationUserForm();
  const { data: dataUsers } = useUsersQuery();

  const users = dataUsers || [];

  const initialValues = {
    id: "",
    userName: "",
    userColor: "#e0cce1",
  };

  const validation = validationSchema as yup.ObjectSchema<typeof initialValues>;
  const onSubmit = async (
    values: ModelUser,
    { resetForm }: FormikHelpers<ModelUser>
  ) => {
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
  };

  return { initialValues, validation, onSubmit, success };
};

export default useFormikUser;
