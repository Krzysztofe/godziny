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

const FormMonthContext = () => {
  const dispatch = useDispatch();
  const { initialValues, validation, onSubmit, success } = useFormikMonth();
  const { btnContent } = useHTTPState(
    success,
    <AiOutlinePlusCircle
      className="text-primary"
      style={{ fontSize: "1.4rem" }}
    />
  );

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

        <Button
          type="submit"
          disabled={success.isLoading}
          className="d-flex p-0 m-0 ms-auto  text-info-emphasis border-0 bg-transparent"
        >
          {btnContent}
        </Button>
      </Form>
    </Formik>
  );
};

export default FormMonthContext;
