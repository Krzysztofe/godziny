import { useSelector } from "react-redux";
import useURLValues from "../../hooks/useURLValues";
import { RootState } from "../../redux/store";
import {
  useAddAllHoursMutation,
  useMonthDataQuery,
} from "../../services/apiSliceMonths";
import useReduxMonthData from "../../hooks/updateReduxDatabase/useReduxMonthData";
import { useDispatch } from "react-redux";
import {
  getMonth,
  getMonthError,
  getMonthIsLoading,
} from "../../redux/storeFeatures/monthPanelSlice";
import { useEffect } from "react";
import { ModelCalcHours } from "../../sharedModels/modelCalcHours";

type ModelFormValues = {
  allHours: number;
};

const useFormikHours = (calcHours: ModelCalcHours | null | undefined, yearValue: string, monthValue: string) => {
  const { yearFromURL, monthFromURL } = useURLValues();
  // const { month } = useSelector((state: RootState) => state.monthPanel);
  const [addAllHours, success] = useAddAllHoursMutation();
  const dispatch = useDispatch();

  // const yearValue = month?.id.slice(0, 4);
  // const monthValue = month?.id.slice(-2);

  // const {
  //   data: month,
  //   error,
  //   isLoading,
  // } = useMonthDataQuery({
  //   year: yearValue ?? "",
  //   month: monthValue ?? "",
  // });

  // useEffect(() => {
  //   dispatch(getMonth(data));

  //   dispatch(getMonthError(error));

  //   dispatch(getMonthIsLoading(isLoading));
  // }, [data, error, isLoading, dispatch]);

  // console.log('form',month)



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
