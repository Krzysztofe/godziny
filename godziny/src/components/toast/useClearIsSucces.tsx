import { useState, useEffect } from "react";

const useClearIsSucces = (requestIsSuccess: boolean) => {
  const [isSuccess, setIsSuccess] = useState(requestIsSuccess);

  useEffect(() => {
    if (requestIsSuccess) setIsSuccess(true);

    const timeoutId = setTimeout(() => {
      setIsSuccess(false);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [requestIsSuccess]);

  return { isSuccess };
};

export default useClearIsSucces;
