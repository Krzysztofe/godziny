import { useState, useEffect } from "react";

const useIsSucces = (isHTTPSuccess: boolean) => {
  const [isSuccess, setSucces] = useState(isHTTPSuccess);

  useEffect(() => {
    setSucces(isHTTPSuccess);
    const timeOutId = setTimeout(() => {
      setSucces(false);
    }, 6000);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [isHTTPSuccess]);

  return { isSuccess };
};

export default useIsSucces;
