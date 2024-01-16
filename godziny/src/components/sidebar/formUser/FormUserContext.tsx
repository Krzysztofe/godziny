import { Form, Formik } from "formik";
import ButtonForm from "../../buttonForm/ButtonForm";
import InputsText from "../../inputs/inputsText/InputsText";
import Toast from "../toast/Toast";
import { dataInputs } from "./dataFormUser";
import useFormikUser from "./useFormikUser";

const FormUserContext = () => {
  const { initialValues, validation, onSubmit, success } = useFormikUser();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validation}
      onSubmit={onSubmit}
    >
      <Form className="position-relative _formInCollapse">
        <div className="position-relative">
          <InputsText inputsData={dataInputs} />
        </div>

        <div className="position-relative">
          <Toast isSuccess={success.isSuccess} />
          <ButtonForm success={success} />
        </div>
      </Form>
    </Formik>
  );
};

export default FormUserContext;
