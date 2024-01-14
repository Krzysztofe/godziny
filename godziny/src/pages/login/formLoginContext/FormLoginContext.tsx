import { Form, Formik } from "formik";
import { Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import InputsText from "../../../components/inputs/inputsText/InputsText";
import useWindowWidth from "../../../hooks/useWindowWidth";
import useFormikLogin from "./useFormikLogin";
import "./_formLoginContext.scss";

const FormLoginContext = () => {
  const { initialValues, onSubmit, isLoading } = useFormikLogin();
  const { windowWidth } = useWindowWidth();

  let btnContent: string | React.ReactNode = "Zaloguj";

  if (isLoading) {
    btnContent = (
      <Spinner animation="border" size="sm" variant="secondary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  const dataInputs = [{ value: "password", type: "password" }];

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form
        className={`border p-5 rounded-1 _bg-opacity-white _d-center _formLoginContext ${
          windowWidth > 500 && "_anim-dropDown"
        }`}
      >
        <div className="_formLoginContext__inputs">
          <div className="text-center fs-2 fw-medium mb-4 ">Podaj hasło</div>
          <InputsText inputsData={dataInputs} />

          <Button
            disabled={isLoading}
            variant="primary"
            type="submit"
            className="fw-medium btn-sm mt-3 w-100 _radius"
          >
            {btnContent}
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default FormLoginContext;
