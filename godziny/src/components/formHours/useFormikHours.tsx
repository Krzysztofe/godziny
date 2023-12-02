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
  const submittedHours = month?.calcHours?.submittedHours;
  const acceptedHours = month?.calcHours?.acceptedHours;
  const calcHours = month && month.calcHours;

  const initialValues = { allHours: 0 };

  const onSubmit = async (values: ModelFormValues) => {
    if (submittedHours + acceptedHours > +values.allHours) return;

    await addAllHours({
      year: yearFromURL,
      month: monthFromURL,
      calcHours: {
        ...calcHours,
        allHours: +values.allHours,
        currentHours: +values.allHours - calcHours.acceptedHours - calcHours.submittedHours,
      },
    });
  };

  return { initialValues, onSubmit, success };
};

export default useFormikHours;
