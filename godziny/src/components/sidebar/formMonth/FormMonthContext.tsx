import { Form, Formik } from "formik";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMonthSuccess } from "../../../redux/storeFeatures/requestSuccessSlice";
import ButtonForm from "../../ButtonForm";
import InputsText from "../../inputs/inputsText/InputsText";
import { dataInputs } from "./dataFormMonth";
import useFormikMonth from "./useFormikMonth";


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
      <Form className="">
        <InputsText inputsData={dataInputs} />
        <ButtonForm success={success} />
      </Form>
    </Formik>
  );
};

export default FormMonthContext;
