import { useAddAllHoursMutation } from "../../../../services/apiSliceMonths";
import { ModelCalcHours } from "../../../../sharedModels/modelCalcHours";

type ModelFormValues = {
  allHours: number;
};

const useFormikHours = (
  calcHours: ModelCalcHours | null | undefined,
  yearValue: string,
  monthValue: string
) => {
  const [addAllHours, success] = useAddAllHoursMutation();

  const initialValues = { allHours: 0 };

  const onSubmit = async (values: ModelFormValues) => {
    if (calcHours) {
      if (
        calcHours?.submittedHours + calcHours?.acceptedHours >
        +values?.allHours
      )
        return;
    }

    calcHours &&
      values.allHours &&
      yearValue &&
      monthValue &&
      (await addAllHours({
        year: yearValue,
        month: monthValue,
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
