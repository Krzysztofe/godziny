import { Form, Formik } from "formik";
import Button from "react-bootstrap/Button";
import { AiOutlinePlusCircle } from "react-icons/ai";
import useHTTPState from "../../../../hooks/useHTTPState";
import InputsRange from "../../../../components/inputs/inputsRange/InputsRange";
import FormHoursError from "./FormHoursError";
import FormHoursTop from "./FormHoursTop";
import useFormikHours from "./useFormikHours";
import { useAllHoursQuery } from "../../../../services/apiSliceMonths";

type Props = {
  monthDate?: string | null;
};

const FormHoursContext = (props: Props) => {
  const yearValue = props.monthDate?.slice(0, 4) ?? "";
  const monthValue = props.monthDate?.slice(5) ?? "";

  const { data: calcHours, isLoading } = useAllHoursQuery({
    year: yearValue ?? "",
    month: monthValue ?? "",
  });

  const { initialValues, onSubmit, success } = useFormikHours(
    calcHours,
    yearValue,
    monthValue
  );

  console.log("", isLoading);

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
        <FormHoursTop calcHours={calcHours} isLoading={isLoading} />

        <InputsRange inputsValues={["allHours"]} />

        <div className="d-flex justify-content-between align-items-center mt-2">
          <FormHoursError calcHours={calcHours} />
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
