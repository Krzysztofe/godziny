import { Form, Formik } from "formik";
import ButtonForm from "../../../components/buttonForm/ButtonForm";
import InputsText from "../../../components/inputs/inputsText/InputsText";
import useWindowWidth from "../../../hooks/useWindowWidth";
import "./_formLoginContext.scss";
import useFormikLogin from "./useFormikLogin";

const dataInputs = [
  { value: "password", type: "password", isErrorPrint: true },
];

const FormLoginContext = () => {
  const { initialValues, onSubmit, isLoading } = useFormikLogin();
  const { windowWidth } = useWindowWidth();

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form
        className={`border p-5 rounded-1 _bg-opacity-white _formLoginContext _d-center ${
          windowWidth > 500 && "_anim-dropDown"
        }`}
      >
        <div>
          <div className="text-center fs-2 fw-medium mb-4 ">Podaj hasło</div>
          <InputsText inputsData={dataInputs} />

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
