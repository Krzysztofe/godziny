import { Form, Formik } from "formik";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMonthSuccess } from "../../../redux/storeFeatures/requestSuccessSlice";
import ButtonForm from "../../buttonForm/ButtonForm";
import InputsText from "../../inputs/inputsText/InputsText";
import useFormikMonth from "./useFormikMonth";
import Toast from "../../toast/Toast";
import {
  currYearDigits,
  currMonthDigits,
} from "../../../data/dataCurrentDates";

export const dataInputsText = [
  {
    value: "monthDate",
    type: "month",
    isErrorPrint: true,
    min: `${currYearDigits}-${currMonthDigits}`,
    max: "2025-12",
  },
];

const FormMonthContext = () => {
  const dispatch = useDispatch();
  const { initialValues, validation, onSubmit, success } = useFormikMonth();

  // useEffect(() => {
  //   dispatch(getMonthSuccess(success.isSuccess));
  // }, [success.isSuccess, dispatch]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validation}
      onSubmit={onSubmit}
    >
      <Form className="position-relative _formInCollapse">
        <InputsText inputsData={dataInputsText} />
        <div className="position-relative">
          <Toast isSuccess={success.isSuccess} />
          <ButtonForm isLoading={success.isLoading} />
        </div>
      </Form>
    </Formik>
  );
};

export default FormMonthContext;
