import { useState } from "react";
import Alert from "../components/alert/Alert";

const useAlertDelete = (action: any) => {
  const [isAlertPrinted, setIsAlertPrinted] = useState(false);

  const handleAlert = () => {
    setIsAlertPrinted(true);
  };

  const alert = (
    <Alert
      action={action}
      isPrinted={isAlertPrinted}
      setIsPrinted={setIsAlertPrinted}
      header={"Usunąć dzień?"}
    />
  );

  return {
    handleAlert,
    alert,
  };
};

export default useAlertDelete;
