import { useEffect } from "react";
import useMonthQuery from "../../../../hooks/useMonthQuery";
import { ModelColumn } from "../../../../sharedModels/modelColumn";
import { addDaysToColumns } from "../utils/utilsAddDaysToColumns";

const useUpdateColumns = (
  setColumns: React.Dispatch<React.SetStateAction<ModelColumn[]>>
) => {
  const { data: month } = useMonthQuery();
  const columnsWithDays = month && addDaysToColumns(month?.columns);

  useEffect(() => {
    if (columnsWithDays) {
      setColumns(columnsWithDays);
    }
  }, [month?.columns]);
};

export default useUpdateColumns;
