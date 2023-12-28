import { Form, Formik } from "formik";
import InputsSelect from "../inputs/InputsSelect";
import InputsText from "../inputs/InputsText";
import FormDayButton from "./FormDayButton";
import useDataFormDay from "./useDataFormDay";
import useFormikDay from "./useFormikDay";
import "./_formDay.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDaySuccess } from "../../redux/storeFeatures/requestSuccessSlice";

const FormDayContext = () => {
  const dispatch = useDispatch();
  const { dataInputsText, dataInputsSelect } = useDataFormDay();
  const { initialValues, validation, onSubmit, success } =
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
        <InputsText inputsData={dataInputsText} />
        <FormDayButton success={success} />
      </Form>
    </Formik>
  );
};

export default FormDayContext;
