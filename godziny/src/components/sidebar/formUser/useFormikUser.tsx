import { FormikHelpers } from "formik";
import * as yup from "yup";
import { useAddUserMutation, useUsersQuery } from "../../../services/apiSliceUsers";
import { ModelUser } from "../../../sharedModels/modelUser";
import { capitalizeFirstLetter } from "../../../utils/utilsCapitalizeFirstLetter";
import useValidationUserForm from "./useValidationFormUser";

const useFormikUser = () => {
  const [addUser, success] = useAddUserMutation();
  const { validationSchema } = useValidationUserForm();
  const { data: listUsers } = useUsersQuery();


  const users = listUsers || [];

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
    
    const userValues = {
      ...values,
      userName: capitalizeFirstLetter(values.userName),
    };

    await addUser(userValues);
    resetForm();
  };

  return { initialValues, validation, onSubmit, success };
};

export default useFormikUser;
