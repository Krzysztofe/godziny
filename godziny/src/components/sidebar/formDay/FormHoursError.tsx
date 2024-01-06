import { useFormikContext } from "formik";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { ModelDay } from "../../../sharedModels/modelDay";



const FormHoursError = () => {
  const { values } = useFormikContext<ModelDay>();
  const { month } = useSelector((state: RootState) => state.monthPanel);
  const currentHours = month?.calcHours?.currentHours || 0;

  return (
    <div className="text-danger d-block mt-0 fs-8" style={{ height: "1rem" }}>
      {currentHours - +values.hours < 0 || currentHours === 0
        ? "Brak dostępnych godzin"
        : ""}
    </div>
  );
};

export default FormHoursError;
