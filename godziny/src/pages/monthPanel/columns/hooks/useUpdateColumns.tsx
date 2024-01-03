import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { addDaysToColumns } from "../utils/utilsAddDaysToColumns";
import { ModelColumn } from "../../../../sharedModels/modelColumn";

const useUpdateColumns = (
  setColumns: React.Dispatch<React.SetStateAction<ModelColumn[]>>
) => {
  const { month } = useSelector((state: RootState) => state.monthPanel);

  const columnsWithDays = month && addDaysToColumns(month?.columns);

  useEffect(() => {
    if (columnsWithDays) {
      setColumns(columnsWithDays);
    }
  }, [month?.columns]);
};

export default useUpdateColumns;
