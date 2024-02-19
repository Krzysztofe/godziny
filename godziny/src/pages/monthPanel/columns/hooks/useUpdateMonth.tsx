import { useEffect } from "react";
import useMonthQuery from "../../../../hooks/useMonthQuery";
import useURLValues from "../../../../hooks/useURLValues";
import { useUpdateMonthMutation } from "../../../../services/apiSliceMonths";
import { ModelColumn } from "../../../../sharedModels/modelColumn";
import { getHoursFromColumns } from "../utils/utilsGetHoursFromColumns";

const useUpdateMonth = (
  columns: ModelColumn[],
  executeUpdateMonth: boolean
) => {
  const { yearFromURL, monthFromURL } = useURLValues();
  const [updateMonth] = useUpdateMonthMutation();
  const { data: month } = useMonthQuery();


  const { submittedHours, acceptedHours, rejectedHours } =
    getHoursFromColumns(columns);

  useEffect(() => {
    if (columns.length > 0 && month) {
      updateMonth({
        year: yearFromURL,
        month: monthFromURL,
        monthBody: {
          ...month,
          columns: columns,
          calcHours: {
            ...month?.calcHours,
            currentHours:
              month?.calcHours?.allHours -
              submittedHours -
              acceptedHours -
              rejectedHours +
              rejectedHours,
            submittedHours,
            acceptedHours,
            rejectedHours,
          },
        },
      });
    }
  }, [executeUpdateMonth]);
};

export default useUpdateMonth;
