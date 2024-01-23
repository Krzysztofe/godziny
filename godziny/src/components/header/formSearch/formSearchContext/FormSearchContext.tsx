import { Form, Formik } from "formik";
import InputsSelect from "../../../inputs/inputsSelect/InputsSelect";
import GetOnChangeValues from "../GetOnChangeValues";
import useDataSearch from "../useDataSearch";
import useFormikSearch from "../useFormikSearch";
import "./_formSearchContext.scss";
import useIsPath from "../../../../hooks/useIsPath";
import { auth } from "../../../../data/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

const FormSearchContext = () => {
  const { dataInputsSelect } = useDataSearch();
  const { initialValues, onSubmit } = useFormikSearch();
  const [user] = useAuthState(auth);
  const { isPath } = useIsPath(["202"]);

  if (!user || !isPath) return null;

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className={`_formSearchContext`}>
        <div className="_formSearchContext__select ms-3 m-md-auto">
          <InputsSelect
            inputsData={dataInputsSelect}
            padding={"ps-4 text-start"}
            inputIcon={true}
          />
        </div>
        <GetOnChangeValues />
      </Form>
    </Formik>
  );
};

export default FormSearchContext;
