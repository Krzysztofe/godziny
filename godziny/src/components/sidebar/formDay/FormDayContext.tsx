import { Form, Formik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { getDaySuccess } from "../../../redux/storeFeatures/requestSuccessSlice";
import FormDayError from "./FormDayError";
import InputsSelect from "../../inputs/InputsSelect";
import InputsText from "../../inputs/InputsText";
import FormDayButton from "./FormDayButton";
import "./_formDay.scss";
import useDataFormDay from "./useDataFormDay";
import useFormikDay from "./useFormikDay";

const FormDayContext = () => {
  const dispatch = useDispatch();
  const { dataInputsText, dataInputsSelect } = useDataFormDay();
  const { initialValues, validation, onSubmit, success, dateError } =
    useFormikDay();
  const { month } = useSelector((state: RootState) => state.monthPanel);
  const allHours = month?.calcHours?.allHours;

  useEffect(() => {
    dispatch(getDaySuccess(success.isSuccess));
  }, [success.isSuccess]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validation}
      onSubmit={onSubmit}
    >
      <Form className={`${allHours === 0 ? "formContainerBlur" : ""} mt-2`}>
        <InputsSelect inputsData={dataInputsSelect} />
        <div className="position-relative" style={{ zIndex: "0" }}>
          <InputsText inputsData={dataInputsText} />
          <FormDayError dateError={dateError} />
        </div>

        <FormDayButton success={success} />
      </Form>
    </Formik>
  );
};

export default FormDayContext;
