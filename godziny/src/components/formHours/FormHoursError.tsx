import { useFormikContext } from "formik";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ModelCalcHours } from "../../sharedModels/modelCalcHours";

type ModelFormValues = {
  allHours: number;
};

type Props = {
  calcHours?: ModelCalcHours;
};

const FormHoursError = (props:Props) => {
  const { values } = useFormikContext<ModelFormValues>();
  const { month } = useSelector((state: RootState) => state.monthPanel);

  var content = "";

  if (props.calcHours) {
    if (
      props?.calcHours?.submittedHours + props?.calcHours?.acceptedHours >
      +values?.allHours
    ) {
      content = `Min. ${
        props?.calcHours?.submittedHours + props?.calcHours?.acceptedHours
      } h`;
    }
  }

  return <div className="text-danger fs-8">{content}</div>;
};

export default FormHoursError;
