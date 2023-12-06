import { useFormikContext } from "formik";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

type ModelFormValues = {
  allHours: number;
};
const FormHoursError = () => {
  const { values } = useFormikContext<ModelFormValues>();
  const { month } = useSelector((state: RootState) => state.monthPanel);

  var content = "";

  if (month) {
    if (
      month?.calcHours?.submittedHours + month?.calcHours?.acceptedHours >
      +values?.allHours
    ) {
      content = `Min. ${
        month?.calcHours?.submittedHours + month?.calcHours?.acceptedHours
      } h`;
    }
  }

  return <div className="text-danger fs-8">{content}</div>;
};

export default FormHoursError;
