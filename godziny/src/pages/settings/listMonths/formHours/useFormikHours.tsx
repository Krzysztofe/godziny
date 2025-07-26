import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { usePatchAllHoursMutation } from "../../../../services/apiSliceMonths";
import { useContext } from "react";
import { MonthItemContext } from "../ListMonths";

type ModelFormValues = {
  allHours: number;
};

const useFormikHours = () => {
  const [patchAllHours, success] = usePatchAllHoursMutation();
  const { calcHours } = useSelector((state: RootState) => state.calcHours);

  const { id } = useContext(MonthItemContext);

  const initialValues = { allHours: 0 };

  const onSubmit = async (values: ModelFormValues) => {
    if (!calcHours) return;
    const { acceptedHours, submittedHours } = calcHours;

    if (calcHours) {
      if (submittedHours + acceptedHours > +values?.allHours) return;
    }

    const currentHours =
      calcHours.submittedHours === 0 && calcHours.acceptedHours === 0
        ? values.allHours
        : values.allHours - calcHours.submittedHours - calcHours.acceptedHours;


    await patchAllHours({
      id,
      body: {
        allHours: values.allHours,
        currentHours,
      },
    });
  };

  return { initialValues, onSubmit, success };
};

export default useFormikHours;
