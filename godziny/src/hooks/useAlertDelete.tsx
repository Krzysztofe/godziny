import { useMemo, useState } from "react";
import Alert from "../components/alert/Alert";


const useAlertDelete = (action: any, header: string) => {
  const [isAlertPrinted, setIsAlertPrinted] = useState(false);

  const handleAlert = () => {
    setIsAlertPrinted(true);
  };

  const alert = (
    <Alert
      action={action}
      isPrinted={isAlertPrinted}
      setIsPrinted={setIsAlertPrinted}
      header={header}
    />
  );

  return {
    handleAlert,
    alert,
  };
};

export default useAlertDelete;
