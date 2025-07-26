import { useFormikContext } from "formik";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";


type ModelFormValues = {
  allHours: number;
};


const FormHoursError = () => {
  const { values } = useFormikContext<ModelFormValues>();
  const { calcHours } = useSelector(
    (state: RootState) => state.calcHours
  );

  let content = "";

  if (calcHours) {
    if (
      calcHours?.submittedHours + calcHours?.acceptedHours >
      +values?.allHours
    ) {
      content = `Min. ${
        calcHours?.submittedHours + calcHours?.acceptedHours
      } h`;
    }
  }

  return <div className="text-danger fs-5">{content}</div>;
};

export default FormHoursError;
