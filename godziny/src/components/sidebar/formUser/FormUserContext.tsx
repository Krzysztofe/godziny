import { Form, Formik } from "formik";
import InputsText from "../../inputs/InputsText";
import useHTTPState from "../../../hooks/useHTTPState";
import useFormikUser from "./useFormikUser";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { getUserSuccess } from "../../../redux/storeFeatures/requestSuccessSlice";
import { useEffect } from "react";
import { dataInputs } from "./dataFormUser";
import ButtonForm from "../../ButtonForm";

const FormUserContext = () => {
  const dispatch = useDispatch();
  const { initialValues, validation, onSubmit, success } = useFormikUser();

  useEffect(() => {
    dispatch(getUserSuccess(success.isSuccess));
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

export default FormUserContext;
