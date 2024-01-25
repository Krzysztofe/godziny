import { Form, Formik } from "formik";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import ButtonForm from "../../../buttonForm/ButtonForm";
import InputsSelect from "../../../inputs/inputsSelect/InputsSelect";
import InputsText from "../../../inputs/inputsText/InputsText";
import Toast from "../../../toast/Toast";
import FormDateError from "../formDateError/FormDateError";
import FormHoursError from "../formHoursError/FormHoursError";
import useDataFormDay from "../useDataFormDay";
import useFormikDay from "../useFormikDay";
import "./_formDayContext.scss";

const FormDayContext = () => {
  const { dataInputsText, dataInputsSelect } = useDataFormDay();
  const { initialValues, validation, onSubmit, success } = useFormikDay();
  const { month } = useSelector((state: RootState) => state.monthPanel);
  const { searchedName } = useSelector((state: RootState) => state.filterDays);

  const isSearching =
    searchedName && searchedName !== "Szukaj"
      ? "_formDayContext__isSearching"
      : "";

  const isAllHours = month?.calcHours?.allHours === 0 ? "_formDayContext" : "";

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validation}
      onSubmit={onSubmit}
    >
      <Form className={` ${isSearching} ${isAllHours} mt-4 position-relative`}>
        <InputsSelect inputsData={dataInputsSelect} padding={"py-2 ps-2"} />
        <div className="position-relative _formDayContext__inputTetx">
          <InputsText inputsData={dataInputsText} />
          <FormDateError />
        </div>
        <div className="position-relative">
          <Toast isSuccess={success.isSuccess} />
          <ButtonForm isLoading={success.isLoading} />
        </div>
        <FormHoursError />
      </Form>
    </Formik>
  );
};

export default FormDayContext;
