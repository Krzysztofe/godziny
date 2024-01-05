import { useState } from "react";
import Alert from "../../../../components/alert/Alert";
import { ModelDay } from "../../../../sharedModels/modelDay";
import useDeleteDayAsync from "./useDeleteDayAsync";

const useAlertDay = (day: ModelDay, columnIndex: number) => {
  const [dayId, setDayId] = useState("");
  const [isAlertPrinted, setIsAlertPrinted] = useState(false);
  const { deleteDayAsync, success } = useDeleteDayAsync(
    day,
    columnIndex,
    dayId
  );

  const handleAlert = (id: undefined | string) => {
    id && setDayId(id);
    setIsAlertPrinted(true);
  };

  const alert = (
    <Alert
      action={deleteDayAsync}
      isPrinted={isAlertPrinted}
      header={"Usunąć dzień?"}
      setIsPrinted={setIsAlertPrinted}
    />
  );

  return {
    handleAlert,
    alert,
    success,
  };
};

export default useAlertDay;
