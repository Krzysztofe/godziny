import { Form, Formik } from "formik";
import Button from "react-bootstrap/Button";

import { currMonthDigits, currYearDigits } from "../../data/dataCurrentDates";
import useHTTPState from "../../hooks/useHTTPState";
import useFormikMonth from "./useFormikMonth";
import { AiOutlinePlusCircle } from "react-icons/ai";
import InputsText from "../inputs/InputsText";

const FormMonthContext = () => {
  const { initialValues, validation, onSubmit, success } = useFormikMonth();
  const { btnContent } = useHTTPState(
    success,
    <AiOutlinePlusCircle className="text-info" style={{ fontSize: "1.4rem" }} />
  );

  const dataInputs = [
    {
      value: "monthDate",
      type: "month",
      label:"Podaj miesiąc",
      isErrorPrint: true,
      min: `${currYearDigits}-${currMonthDigits}`,
      max: "2025-12",
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

export default FormMonthContext;
