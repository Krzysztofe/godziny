import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useFormikContext } from "formik";

type ModelFormValues = {
  allHours: number;
};
const FormHoursError = () => {
  const { values } = useFormikContext<ModelFormValues>();
  const { month } = useSelector((state: RootState) => state.monthsPanel);
  const submittedHours = month?.calcHours.submittedHours;
  const acceptedHours = month?.calcHours.acceptedHours;

  return (
    <div className="text-danger fs-8">
      {submittedHours + acceptedHours > +values.allHours
        ? `Min. ${submittedHours + acceptedHours} h`
        : ""}
    </div>
  );
};

export default FormHoursError;
