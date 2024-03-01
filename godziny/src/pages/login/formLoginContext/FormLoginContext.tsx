import { Form, Formik } from "formik";
import ButtonForm from "../../../components/buttonForm/ButtonForm";
import InputsText from "../../../components/inputs/inputsText/InputsText";
import "./_formLoginContext.scss";
import useFormikLogin from "./useFormikLogin";

const dataInputsText = [
  { value: "password", type: "password", isErrorPrint: true },
];

const FormLoginContext = () => {
  const { initialValues, onSubmit, isLoading } = useFormikLogin();

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form
        className={`border p-5 rounded-1 _bg-opacity-white _formLoginContext _d-center `}
      >
        <div>
          <div className="text-center fs-2 fw-medium mb-4 ">Podaj hasło</div>
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
