import { Form, Formik } from "formik";
import Button from "react-bootstrap/Button";
import useHTTPState from "../../../hooks/useHTTPState";
import useFormikMonth from "./useFormikMonth";
import { AiOutlinePlusCircle } from "react-icons/ai";
import InputsText from "../../inputs/InputsText";
import { useDispatch } from "react-redux";
import { getMonthSuccess } from "../../../redux/storeFeatures/requestSuccessSlice";
import { useEffect } from "react";
import { dataInputs } from "./dataFormMonth";
import ButtonForm from "../../ButtonForm";

const FormMonthContext = () => {
  const dispatch = useDispatch();
  const { initialValues, validation, onSubmit, success } = useFormikMonth();

  useEffect(() => {
    dispatch(getMonthSuccess(success.isSuccess));
  }, [success.isSuccess]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validation}
      onSubmit={onSubmit}
    >
      <Form className="py-2">
        <InputsText inputsData={dataInputs} />
        <ButtonForm success={success} />
      </Form>
    </Formik>
  );
};

export default FormMonthContext;
