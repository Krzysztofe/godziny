import React from "react";
import useHTTPState from "../../hooks/useHTTPState";
import useMonthPanelHeaderFormik from "./useFormikHours";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Button from "react-bootstrap/Button";
import { AiOutlinePlusCircle } from "react-icons/ai";
import InputsText from "../inputs/InputsText";
import { Form as FormFormik, Formik, useFormikContext } from "formik";
import useFormikHours from "./useFormikHours";
import Form from "react-bootstrap/Form";
import InputsRange from "../inputs/InputsRange";
import FormHoursTop from "./FormHoursTop";
import FormHoursError from "./FormHoursError";

const FormHours = () => {
  // const { formik, success } = useMonthPanelHeaderFormik();
  const { initialValues, onSubmit, success } = useFormikHours();
  const { btnContent } = useHTTPState(
    success,
    <AiOutlinePlusCircle className="text-info" style={{ fontSize: "1.4rem" }} />
  );
  const { month } = useSelector((state: RootState) => state.monthsPanel);
  const submittedHours = month?.calc.submittedHours;
  const acceptedHours = month?.calc.acceptedHours;

  const dataInputsText = [
    { value: "allHours", type: "number", isErrorPrint: false },
  ];

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <FormFormik>
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
      </FormFormik>
    </Formik>
  );
};

export default FormHours;
