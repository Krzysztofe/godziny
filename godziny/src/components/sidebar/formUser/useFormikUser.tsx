import { useAddUserMutation } from "../../../services/apiSliceUsers";
import useValidationUserForm from "./useValidationFormUser";
import { v4 as UUID } from "uuid";
import * as yup from "yup";
import { ModelUser } from "../../../sharedModels/modelUser";
import { FormikHelpers } from "formik";
import { capitalizeFirstLetter } from "../../../utils/utilsCapitalizeFirstLetter";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const useFormikUser = () => {
  const [addUser, success] = useAddUserMutation();
  const { validationSchema } = useValidationUserForm();
  const { listUsers } = useSelector((state: RootState) => state.listUsers);

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
      id: UUID(),
    };

    const sortedUsers = [...users, userValues].sort((a, b) =>
      a.userName.localeCompare(b.userName)
    );

    await addUser(sortedUsers);
    resetForm();
  };

  return { initialValues, validation, onSubmit, success };
};

export default useFormikUser;
