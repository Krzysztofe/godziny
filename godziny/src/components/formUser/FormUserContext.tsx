import { Form, Formik } from "formik";
import Button from "react-bootstrap/Button";
import InputsText from "../inputs/InputsText";
import useHTTPState from "../../hooks/useHTTPState";
import useFormikUser from "./useFormikUser";
import { AiOutlinePlusCircle } from "react-icons/ai";

const FormUserContext = () => {
  const { initialValues, validation, onSubmit, success } = useFormikUser();
  const { btnContent } = useHTTPState(
    success,
    <AiOutlinePlusCircle className="text-info" style={{ fontSize: "1.4rem" }} />
  );

  const dataInputs = [
    {
      value: "userName",
      type: "text",
      label: "Podaj imię",
      isErrorPrint: true,
      placeholder: "Imię",
    },
    {
      value: "userColor",
      type: "color",
      label: "Podaj kolor",
      isErrorPrint: true,
    },
  ];

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validation}
      onSubmit={onSubmit}
    >
      <Form className="py-2">
        <InputsText inputsData={dataInputs} />

        <Button
          type="submit"
          disabled={success.isLoading}
          className="col-2 d-flex justify-content-center align-items-center justify-content-center p-0 m-0 ms-auto  text-info-emphasis border-0 bg-transparent"
        >
          {btnContent}
        </Button>
      </Form>
    </Formik>
  );
};

export default FormUserContext;
