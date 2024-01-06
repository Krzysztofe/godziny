import { useFormikContext } from "formik";
import { ModelDay } from "../../../../sharedModels/modelDay";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { validationFormDayDate } from "./utilsFormDateError";



const FormDateError = () => {
  const { values } = useFormikContext<ModelDay>();
  const { month } = useSelector((state: RootState) => state.monthPanel);

  const error =
    month && validationFormDayDate(month, values.userName, values.date);

  return (
    <div
      className="text-danger d-block mt-0 fs-8"
      style={{ height: "0.7rem", position: "absolute", bottom: "0px" }}
    >
      {error}
    </div>
  );
};

export default FormDateError;
