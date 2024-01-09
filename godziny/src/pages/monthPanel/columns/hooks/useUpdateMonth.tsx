import { useEffect } from "react";
import { ModelColumn } from "../../../../sharedModels/modelColumn";
import { getHoursFromColumns } from "../utils/utilsGetHoursFromColumns";
import useURLValues from "../../../../hooks/useURLValues";
import { useUpdateMonthMutation } from "../../../../services/apiSliceMonths";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { throttle } from "lodash";

const useUpdateMonth = (
  columns: ModelColumn[],
  executeUpdateMonth: boolean
) => {
  const { yearFromURL, monthFromURL } = useURLValues();
  const [updateMonth] = useUpdateMonthMutation();
  const { month } = useSelector((state: RootState) => state.monthPanel);
  const { submittedHours, acceptedHours, rejectedHours } =
    getHoursFromColumns(columns);

  useEffect(() => {
    if (columns.length > 0 && month) {
      const throttledUpdate = throttle(
        () => {
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
        },
        1500,
        {
          leading: false,
          trailing: true,
        }
      );
      throttledUpdate();
    }
  }, [executeUpdateMonth]);
};

export default useUpdateMonth;