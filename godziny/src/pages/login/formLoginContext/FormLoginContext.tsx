import { Form, Formik } from "formik";
import ButtonForm from "../../../components/buttonForm/ButtonForm";
import InputsText from "../../../components/inputs/inputsText/InputsText";
import "./_formLoginContext.scss";
import useFormikLogin from "./useFormikLogin";
import InputAccessability from "./InputAccessability";

const dataInputsText = [
  { value: "adminEmail", type: "email", isErrorPrint: true },
  { value: "adminPassword", type: "password", isErrorPrint: true },
];

const FormLoginContext = () => {
  const { initialValues, onSubmit, isLoading } = useFormikLogin();

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form
        className={`border p-5 rounded-1 _bg-opacity-white _formLoginContext _d-center _anim-dropDown`}
      >
        <div>
          <InputAccessability />
          <div className="text-center fs-2 fw-medium mb-4 ">Zaloguj się</div>
          <InputsText inputsData={dataInputsText} />
          <ButtonForm
            isLoading={isLoading}
            text={"Zaloguj"}
            styles={"_formLoginContext__button"}
          />
        </div>
      </Form>
    </Formik>
  );
};

export default FormLoginContext;
