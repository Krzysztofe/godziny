import { useFormikContext } from "formik";
import useMonthQuery from "../../../../hooks/useMonthQuery";
import { ModelDay } from "../../../../sharedModels/modelDay";
import "./_formDateError.scss";
import { validationFormDayDate } from "./utilsFormDateError";

const FormDateError = () => {
  const { values } = useFormikContext<ModelDay>();
   const { data: month } = useMonthQuery();
  

  const error =
    month && validationFormDayDate(month, values.userName, values.date);

  return (
    <div className="text-danger d-block mt-0 fs-5 ps-2 _formDateError">{error}</div>
  );
};

export default FormDateError;
