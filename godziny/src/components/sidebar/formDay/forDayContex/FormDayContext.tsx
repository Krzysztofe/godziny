import { Form, Formik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { getDaySuccess } from "../../../../redux/storeFeatures/requestSuccessSlice";
import ButtonForm from "../../../buttonForm/ButtonForm";
import InputsSelect from "../../../inputs/inputsSelect/InputsSelect";
import InputsText from "../../../inputs/inputsText/InputsText";
import InputsTextCover from "../../../inputs/inputsText/labelCover/InputsCover";
import FormHoursError from "../formHoursError/FormHoursError";
import useDataFormDay from "../useDataFormDay";
import useFormikDay from "../useFormikDay";
import "./_formDayContext.scss";
import FormDateError from "../formDateError/FormDateError";
import Toast from "../../toast/Toast";

const FormDayContext = () => {
  const dispatch = useDispatch();
  const { dataInputsText, dataInputsSelect } = useDataFormDay();
  const { initialValues, validation, onSubmit, success } = useFormikDay();
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
      <Form
        className={`${
          allHours === 0 ? "_formDayContext" : ""
        } mt-4 position-relative`}
      >
        <InputsSelect inputsData={dataInputsSelect} padding={"py-2 ps-2"} />

        <div className="position-relative mb-3 _formDayContext__inputTetx">
          <InputsText inputsData={dataInputsText} />
          {/* <InputsTextCover text={"Data"} /> */}
          <FormDateError />
        </div>
        <Toast text={"Zapisano"} isSuccess={success.isSuccess} />
        <ButtonForm success={success} />
        <FormHoursError />
      </Form>
    </Formik>
  );
};

export default FormDayContext;
