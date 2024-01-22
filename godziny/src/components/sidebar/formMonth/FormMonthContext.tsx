import { Form, Formik } from "formik";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMonthSuccess } from "../../../redux/storeFeatures/requestSuccessSlice";
import ButtonForm from "../../buttonForm/ButtonForm";
import InputsText from "../../inputs/inputsText/InputsText";
import { dataInputs } from "./dataFormMonth";
import useFormikMonth from "./useFormikMonth";
import Toast from "../../toast/Toast";

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
      <Form className="position-relative _formInCollapse">
        <InputsText inputsData={dataInputs} />
        <div className="position-relative">
          <Toast isSuccess={success.isSuccess} />
          <ButtonForm isLoading={success.isLoading} />
        </div>
      </Form>
    </Formik>
  );
};

export default FormMonthContext;
