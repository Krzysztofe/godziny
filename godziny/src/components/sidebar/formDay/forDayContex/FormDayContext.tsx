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

const FormDayContext = () => {
  const dispatch = useDispatch();
  const { dataInputsText, dataInputsSelect } = useDataFormDay();
  const { initialValues, validation, onSubmit, success } = useFormikDay();
  const { month } = useSelector((state: RootState) => state.monthPanel);
  const allHours = month?.calcHours?.allHours;
  const [isPrinted, setPrinted] = useState(true);

  const handleDelete = () => {
    setPrinted(false);
  };

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
        <InputsSelect inputsData={dataInputsSelect} />
        <div className="position-relative mb-3">
          <InputsText inputsData={dataInputsText} />

          {isPrinted && (
            <div
              onClick={handleDelete}
              className="div w-100 ps-2 _fs-3 d-flex align-items-center bg-secondary text-light-emphasis _radius border position-absolute"
            >
              Data
            </div>
          )}

          <FormDateError />
        </div>
        <ButtonForm success={success} />
        <FormHoursError />
      </Form>
    </Formik>
  );
};

export default FormDayContext;
