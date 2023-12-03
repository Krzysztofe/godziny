import { Form, Formik } from "formik";
import Button from "react-bootstrap/Button";
import { AiOutlinePlusCircle } from "react-icons/ai";
import useHTTPState from "../../hooks/useHTTPState";
import InputsRange from "../inputs/inputsRange/InputsRange";
import FormHoursError from "./FormHoursError";
import FormHoursTop from "./FormHoursTop";
import useFormikHours from "./useFormikHours";

const FormHoursContext = () => {
  const { initialValues, onSubmit, success } = useFormikHours();
  const { btnContent } = useHTTPState(
    success,
    <AiOutlinePlusCircle className="text-primary" style={{ fontSize: "1.4rem" }} />
  );

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className="py-2">
        <FormHoursTop />
        <InputsRange inputsValues={["allHours"]} />

        <div className="d-flex justify-content-between align-items-center mt-2">
          <FormHoursError />
          <Button
            type="submit"
            disabled={success.isLoading}
            className="col-2 d-flex justify-content-center align-items-center m-0 justify-content-center p-0 m-0 ms-1  text-info-emphasis border-0 bg-transparent"
          >
            {btnContent}
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default FormHoursContext;
