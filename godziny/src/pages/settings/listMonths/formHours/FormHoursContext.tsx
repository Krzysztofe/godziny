import { Form, Formik } from "formik";
import ButtonForm from "../../../../components/buttonForm/ButtonForm";
import InputsRange from "../../../../components/inputs/inputsRange/InputsRange";
import useMonthDate from "../useMonthDate";
import FormHoursError from "./FormHoursError";
import FormHoursTop from "./formHoursTop/FormHoursTop";
import useFormikHours from "./useFormikHours";
import { useContext } from "react";
import { MonthItemContext } from "../ListMonths";

const FormHoursContext = () => {
  const monthIdx = useContext(MonthItemContext);
  const { monthDate } = useMonthDate(monthIdx);
  const yearValue = monthDate?.slice(0, 4) ?? "";
  const monthValue = monthDate?.slice(5) ?? "";
  const { initialValues, onSubmit, success } = useFormikHours(
    yearValue,
    monthValue
  );

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className="py-2 pe-2">
        <FormHoursTop />
        <InputsRange inputsValues={["allHours"]} />
        <div className="_d-between align-items-center mt-2 ">
          <div className="mt-2">
            <FormHoursError />
          </div>
          <ButtonForm isLoading={success.isLoading} />
        </div>
      </Form>
    </Formik>
  );
};

export default FormHoursContext;
