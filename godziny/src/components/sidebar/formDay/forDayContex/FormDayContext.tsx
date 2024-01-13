import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { getDaySuccess } from "../../../../redux/storeFeatures/requestSuccessSlice";
import FormDateError from "../formDateError/FormDateError";
import InputsSelect from "../../../inputs/inputsSelect/InputsSelect";
import InputsText from "../../../inputs/inputsText/InputsText";
import FormHoursError from "../formHoursError/FormHoursError";
import "./_formDayContext.scss";
import useDataFormDay from "../useDataFormDay";
import useFormikDay from "../useFormikDay";
import ButtonForm from "../../../ButtonForm";
import InputsTextCover from "../../../inputs/inputsText/inputsTextCover/InputsTextCover";
import FilterColumns from "../../../header/formSearch/formSearchContext/FormSearchContext";

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
      <Form className={`${allHours === 0 ? "_formDayContext" : ""} mt-4`}>
        <InputsSelect inputsData={dataInputsSelect} padding={"py-2 ps-2"} />

        <div className="position-relative mb-3">
          <InputsText inputsData={dataInputsText} />
          <InputsTextCover text={"Data"} />
        </div>

        <ButtonForm success={success} />
        <FormHoursError />
      </Form>
    </Formik>
  );
};

export default FormDayContext;
