import { useFormikContext } from "formik";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { ModelDay } from "../../../../sharedModels/modelDay";
import "./_formHoursError.scss";
import useMonthQuery from "../../../../hooks/useMonthQuery";

const FormHoursError = () => {
  const { values } = useFormikContext<ModelDay>();
  // const { month } = useSelector((state: RootState) => state.monthPanel);
   const { data: month } = useMonthQuery();
   
  const currentHours = month?.calcHours?.currentHours || 0;

  return (
    <div className="text-danger d-block mt-0 fs-5 ps-2  _formHoursError">
      {currentHours - +values.hours < 0 || currentHours === 0
        ? "Brak dostępnych godzin"
        : ""}
    </div>
  );
};

export default FormHoursError;
