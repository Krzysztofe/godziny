import { Form, Formik } from "formik";
import { Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import InputsText from "../../../components/inputs/InputsText";
import useWindowWidth from "../../../hooks/useWindowWidth";
import useFormikLogin from "./useFormikLogin";

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
        className={`border p-5 rounded-1 bg-opacity-white ${
          windowWidth > 500 && "anim-dropDown"
        }`}
        style={{
          width: windowWidth <= 500 ? "100%" : "fit-content",
          height: windowWidth <= 500 ? "100%" : "fit-content",
          display: "grid",
          placeItems: "center",
        }}
      >
        <div style={{ scale: "1.2" }}>
          <div className="text-center fs-5 fw-medium mb-4">Podaj hasło</div>
          <InputsText inputsData={dataInputs} />

          <Button
            disabled={isLoading}
            variant="primary"
            type="submit"
            className="fw-medium btn-sm mt-3 w-100"
          >
            {btnContent}
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default FormLoginContext;
