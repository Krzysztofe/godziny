import { Form, Formik } from "formik";
import {
  currMonthDigits,
  currYearDigits,
} from "../../../data/dataCurrentDates";
import ButtonForm from "../../buttonForm/ButtonForm";
import InputsText from "../../inputs/inputsText/InputsText";
import Toast from "../../toast/Toast";
import useFormikMonth from "./useFormikMonth";


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
  const { initialValues, validation, onSubmit, success } = useFormikMonth();

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
