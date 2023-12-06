import { useFormikContext } from "formik";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

type ModelFormValues = {
  allHours: number;
};
const FormHoursError = () => {
  const { values } = useFormikContext<ModelFormValues>();
  const { month } = useSelector((state: RootState) => state.monthPanel);
  const submittedHours = month?.calcHours.submittedHours;
  const acceptedHours = month?.calcHours.acceptedHours;

  return (
    <div className="text-danger fs-8">
      {submittedHours &&
        acceptedHours &&
        (submittedHours + acceptedHours > +values.allHours
          ? `Min. ${submittedHours + acceptedHours} h`
          : "")}
    </div>
  );
};

export default FormHoursError;
