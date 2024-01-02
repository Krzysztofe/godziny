import { useFormikContext } from "formik";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { ModelCalcHours } from "../../../../sharedModels/modelCalcHours";


type ModelFormValues = {
  allHours: number;
};

type Props = {
  calcHours?: ModelCalcHours;
};

const FormHoursError = (props: Props) => {
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

  return <div className="text-danger fs-8">{content}</div>;
};

export default FormHoursError;
