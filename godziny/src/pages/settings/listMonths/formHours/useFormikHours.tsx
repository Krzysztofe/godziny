import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { usePatchAllHoursMutation } from "../../../../services/apiSliceMonths";
import { useContext } from "react";
import { MonthItemContext } from "../ListMonths";
import useMonthQuery from "../../../../hooks/useMonthQuery";

type ModelFormValues = {
  allHours: number;
};

const useFormikHours = () => {
  const [patchAllHours, success] = usePatchAllHoursMutation();
  const { calcHours } = useSelector((state: RootState) => state.calcHours);

  const { id } = useContext(MonthItemContext);

  const initialValues = { allHours: 0 };

  const onSubmit = async (values: ModelFormValues) => {
    const { acceptedHours, submittedHours } = calcHours;

    if (calcHours.hours) {
      if (submittedHours + acceptedHours > +values?.allHours) return;
    }

    await patchAllHours({
      id,
      body: {
        allHours: values.allHours,
        currentHours: values.allHours,
      },
    });
  };

  return { initialValues, onSubmit, success };
};

export default useFormikHours;
