import { useSelector } from "react-redux";
import useURLValues from "../../hooks/useURLValues";
import { RootState } from "../../redux/store";
import { useAddAllHoursMutation } from "../../services/apiSliceMonths";

type ModelFormValues = {
  allHours: number;
};

const useFormikHours = () => {
  const { yearFromURL, monthFromURL } = useURLValues();
  const { month } = useSelector((state: RootState) => state.monthsPanel);
  const [addAllHours, success] = useAddAllHoursMutation();
  const submittedHours = month?.calc?.submittedHours;
  const acceptedHours = month?.calc?.acceptedHours;

  const initialValues = { allHours: 0 };

  const onSubmit = async (values: ModelFormValues) => {
    if (submittedHours + acceptedHours > +values.allHours) return;

    await addAllHours({
      year: yearFromURL,
      month: monthFromURL,
      allHours: +values.allHours,
    });
  };

  return { initialValues, onSubmit, success };
};

export default useFormikHours;
