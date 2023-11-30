import { Form, Formik } from "formik";
import useFormikLogin from "./useFormikLogin";
import InputsText from "../../components/inputs/InputsText";
import Button from "react-bootstrap/Button";
import { Spinner } from "react-bootstrap";
import useWindowWidth from "../../hooks/useWindowWidth";

const FormLoginContext = () => {
  const { initialValues, onSubmit, isLoading } = useFormikLogin();
  let btnContent: string | React.ReactNode = "Zaloguj";

  const { windowWidth } = useWindowWidth();

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
        className="border p-4 rounded-1"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          scale: "1.3",
          width: windowWidth <= 500 ? "77%" : "fit-content",
          height: windowWidth <= 500 ? "77%" : "fit-content",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="text-center fs-5 fw-medium mb-4">Podaj hasło</div>
        <InputsText inputsData={dataInputs} />

        <Button
          disabled={isLoading}
          variant="info"
          type="submit"
          className="fw-medium btn-sm mt-3 w-100"
          style={{ maxWidth: "169px" }}
        >
          {btnContent}
        </Button>
      </Form>
    </Formik>
  );
};

export default FormLoginContext;
