import { Form, Formik } from "formik";
import useFormikLogin from "./useFormikLogin";
import InputsText from "../../components/inputs/InputsText";
import Button from "react-bootstrap/Button";
import { Spinner } from "react-bootstrap";

const FormLoginContext = () => {
  const { initialValues, onSubmit, isLoading } = useFormikLogin();
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
        className="w-sm-90 border p-4 rounded-1"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.6)",
        }}
      >
        <div className="text-center fs-5 fw-medium mb-4">Podaj hasło</div>
        <InputsText inputsData={dataInputs} />

        <Button
          disabled={isLoading}
          variant="info"
          type="submit"
          className="fw-medium mt-3 w-100"
        >
          {btnContent}
        </Button>
      </Form>
    </Formik>
  );
};

export default FormLoginContext;
