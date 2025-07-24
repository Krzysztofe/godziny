import { useFormikContext } from "formik";
import useMonthQuery from "../../../../hooks/useMonthQuery";
import { ModelDay } from "../../../../sharedModels/modelDay";
import "./_formHoursError.scss";

const FormHoursError = () => {
  const { values } = useFormikContext<ModelDay>();
  const { data: month } = useMonthQuery();

  const currentHours = month?.hours?.currentHours || 0;

  return (
    <div className="text-danger d-block mt-0 fs-5 ps-2  _formHoursError">
      {currentHours - +values.hours < 0 || currentHours === 0
        ? "Brak dostępnych godzin"
        : ""}
    </div>
  );
};

export default FormHoursError;
