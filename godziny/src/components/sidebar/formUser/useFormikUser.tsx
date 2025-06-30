import { FormikHelpers } from "formik";
import * as yup from "yup";
import { useAddUserMutation, useUsersQuery } from "../../../services/apiSliceUsers";
import { ModelUser } from "../../../sharedModels/modelUser";
import { capitalizeFirstLetter } from "../../../utils/utilsCapitalizeFirstLetter";
import useValidationUserForm from "./useValidationFormUser";

const useFormikUser = () => {
  const [addUser, success] = useAddUserMutation();
  const { validationSchema } = useValidationUserForm();


  const initialValues = {
    userName: "",
    userColor: "#e0cce1",
  };

  const validation = validationSchema as yup.ObjectSchema<typeof initialValues>;
  
  const onSubmit = async (
    values: Omit<ModelUser, "id">,
    { resetForm }: FormikHelpers<Omit<ModelUser, "id">>,
  ) => {
    
    const userValues = {
      ...values,
      userName: capitalizeFirstLetter(values.userName),
    };

    await addUser(userValues);   
    resetForm();
  };

 const error = success.isError

  return { initialValues, validation, onSubmit, success, error };
};

export default useFormikUser;
