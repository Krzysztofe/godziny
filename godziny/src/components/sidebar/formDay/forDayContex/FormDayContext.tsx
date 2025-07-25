import { Form, Formik } from "formik";
import { useSelector } from "react-redux";
import useMonthQuery from "../../../../hooks/useMonthQuery";
import { RootState } from "../../../../redux/store";
import ButtonForm from "../../../buttonForm/ButtonForm";
import InputsSelect from "../../../inputs/inputsSelect/InputsSelect";
import InputsText from "../../../inputs/inputsText/InputsText";
import Toast from "../../../toast/Toast";
import FormDateError from "../formDateError/FormDateError";
import FormHoursError from "../formHoursError/FormHoursError";
import "./_formDayContext.scss";
import useDataFormDay from "./useDataFormDay";
import useFormikDay from "./useFormikDay";

const FormDayContext = () => {
  const { dataInputsText, dataInputsSelect } = useDataFormDay();
  const { initialValues, validation, onSubmit, success } = useFormikDay();
  const { data: month } = useMonthQuery();
  const { searchedName } = useSelector((state: RootState) => state.searchName);

  const isSearching =
    searchedName && searchedName !== "Szukaj"
      ? "_formDayContext__isSearching"
      : "";

  const isAllHours = month?.hours?.allHours === 0 ? "_formDayContext" : "";

  if (!month) return null;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validation}
      onSubmit={onSubmit}
    >
      <Form
        className={` ${isSearching} ${isAllHours} mt-4 position-relative _formDayContext--width`}
      >
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
