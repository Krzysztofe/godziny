import { useFormik } from "formik";
import {
  useAddUserMutation,
  useUsersQuery,
} from "../../../services/apiSliceUsers";

export interface ModelUser {
  id: string;
  userName: string;
  userColor: string;
}

const useUserSettingsFormik = () => {
  const [addUser, success] = useAddUserMutation();
  const { data: dataUsers } = useUsersQuery();

  console.log("ccc", dataUsers?.users);

  const formik = useFormik<ModelUser>({
    initialValues: { id: crypto.randomUUID(), userName: "", userColor: "" },
    //   validationSchema: validationSchema,

    onSubmit: async values => {
      if (dataUsers) {
        await addUser([...dataUsers, { ...values }]);
      } else {
        await addUser([values]);
      }
    },
  });

  return { formik, success };
};

export default useUserSettingsFormik;
