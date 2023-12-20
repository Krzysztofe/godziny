import { Form, Formik, FormikConfig } from "formik";
import InputsSelect from "../inputs/InputsSelect";
import InputsText from "../inputs/InputsText";
import FormDayButton from "./FormDayButton";
import useDataFormDay from "./useDataFormDay";
import useFormikDay from "./useFormikDay";
import "./_formDay.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ModelInitialValuesFormikDay } from "./useFormikDay";


type FormData = {
  id: string;
  date: string;
  hours: string;
  userName: string;
  place: string;
  userColor: string;
};

const asFormikConfig = <Values extends FormData>(props: FormikConfig<Values>) =>
  props;

const FormDayContext = () => {
  const { dataInputsText, dataInputsSelect } = useDataFormDay();
  const { initialValues, validation, onSubmit, success } = useFormikDay();
  const { month } = useSelector((state: RootState) => state.monthPanel);
  const allHours = month?.calcHours?.allHours;

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
