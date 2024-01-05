import { Form, Formik } from "formik";
import Button from "react-bootstrap/Button";
import InputsText from "../../inputs/InputsText";
import useHTTPState from "../../../hooks/useHTTPState";
import useFormikUser from "./useFormikUser";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { getUserSuccess } from "../../../redux/storeFeatures/requestSuccessSlice";
import { useEffect } from "react";
import { dataInputs } from "./dataFormUser";

const FormUserContext = () => {
  const dispatch = useDispatch();
  const { initialValues, validation, onSubmit, success } = useFormikUser();
  const { btnContent } = useHTTPState(
    success,
    <AiOutlinePlusCircle
      className="text-primary"
      style={{ fontSize: "1.4rem" }}
    />
  );

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

        <Button
          type="submit"
          disabled={success.isLoading}
          className="d-flex p-0 m-0 ms-auto text-info-emphasis border-0 bg-transparent"
        >
          {btnContent}
        </Button>
      </Form>
    </Formik>
  );
};

export default FormUserContext;
