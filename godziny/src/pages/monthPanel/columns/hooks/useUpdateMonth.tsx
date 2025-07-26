import { useEffect } from "react";
import useMonthQuery from "../../../../hooks/useMonthQuery";
import useURLValues from "../../../../hooks/useURLValues";
import { useUpdateMonthMutation } from "../../../../services/apiSliceMonths";
import { ModelColumns } from "../../../../sharedModels/modelColumns";
import { getHoursFromColumns } from "../utils/utilsGetHoursFromColumns";

const useUpdateMonth = (
  columns: any,
  executeUpdateMonth: boolean
) => {
  const { yearFromURL, monthFromURL } = useURLValues();
  const [updateMonth] = useUpdateMonthMutation();
  const { data: month } = useMonthQuery();

  const { submittedHours, acceptedHours, rejectedHours } =
    getHoursFromColumns(columns);

  useEffect(() => {
    const columnsBody = {
      submitted: columns[0]?.days,
      accepted: columns[1]?.days,
      rejected: columns[2]?.days,
    };

    console.log("", columnsBody);

    if (columns.length > 0 && month) {
      updateMonth({
        year: yearFromURL,
        month: monthFromURL,
        monthBody: {
          columns: columnsBody,
          hours: {
            ...month?.hours,
            currentHours:
              month?.hours?.allHours -
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
