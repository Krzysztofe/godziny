import { useSelector } from "react-redux";
import useURLValues from "../../hooks/useURLValues";
import { RootState } from "../../redux/store";
import { useAddAllHoursMutation } from "../../services/apiSliceMonths";

type ModelFormValues = {
  allHours: number;
};

const useFormikHours = () => {
  const { yearFromURL, monthFromURL } = useURLValues();
  const { month } = useSelector((state: RootState) => state.monthPanel);
  const [addAllHours, success] = useAddAllHoursMutation();

  const calcHours = month && month.calcHours;

  // const { submittedHours, acceptedHours } = month && month?.calcHours;

  const initialValues = { allHours: 0 };

  const onSubmit = async (values: ModelFormValues) => {
   
    if (month) {
      if (
        month?.calcHours?.submittedHours + month?.calcHours?.acceptedHours >
        +values?.allHours
      )
        return;
    }

    calcHours &&
      values.allHours &&
      (await addAllHours({
        year: yearFromURL,
        month: monthFromURL,
        calcHours: {
          ...calcHours,
          allHours: +values.allHours,
          currentHours:
            +values.allHours -
            calcHours.acceptedHours -
            calcHours.submittedHours,
        },
      }));
  };

  return { initialValues, onSubmit, success };
};

export default useFormikHours;
