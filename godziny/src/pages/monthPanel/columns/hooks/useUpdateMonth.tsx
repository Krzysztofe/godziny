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

  // console.log('columns',columns)

  // console.log('cccc',{
  //   year: yearFromURL,
  //   month: monthFromURL,
  //   monthBody: {
  //     columns: columns,
  //     hours: {
  //       ...month?.hours,
  //       currentHours:
  //         month?.hours?.allHours -
  //         submittedHours -
  //         acceptedHours -
  //         rejectedHours +
  //         rejectedHours,
  //       submittedHours,
  //       acceptedHours,
  //       rejectedHours,
  //     },
  //   },
  // })

  useEffect(() => {
    const columnsBody = {
      submitted: columns[0]?.days,
      accepted: columns[1]?.days,
      rejected: columns[2]?.days,
    };

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
