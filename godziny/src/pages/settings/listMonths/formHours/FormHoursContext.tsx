import { Form, Formik } from "formik";
import Button from "react-bootstrap/Button";
import { AiOutlinePlusCircle } from "react-icons/ai";
import InputsRange from "../../../../components/inputs/inputsRange/InputsRange";
import useHTTPState from "../../../../hooks/useHTTPState";
import useMonthDate from "../useMonthDate";
import FormHoursError from "./FormHoursError";
import FormHoursTop from "./FormHoursTop";
import useFormikHours from "./useFormikHours";

type Props = {
  idx: number;
};

const FormHoursContext = (props: Props) => {
  const { monthDate } = useMonthDate(props.idx);
  const yearValue = monthDate?.slice(0, 4) ?? "";
  const monthValue = monthDate?.slice(5) ?? "";
  const { initialValues, onSubmit, success } = useFormikHours(
    yearValue,
    monthValue
  );

  const { btnContent } = useHTTPState(
    success,
    <AiOutlinePlusCircle
      className="text-primary"
      style={{ fontSize: "1.4rem" }}
    />
  );

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className="py-2 pe-2">
        <FormHoursTop />
        <InputsRange inputsValues={["allHours"]} />
        <div className="_d-between align-items-center mt-2">
          <FormHoursError />
          <Button
            type="submit"
            disabled={success.isLoading}
            className="col-2 _d-center m-0 p-0 m-0 ms-1  text-info-emphasis border-0 bg-transparent"
          >
            {btnContent}
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default FormHoursContext;
