import { useEffect, useState } from "react";
import useFirebaseConfig from "../../hooks/useFirebaseConfig";

const dataRemainingSeconds = 61;

const useAutoLogout = () => {

  const [secondsRemaining, setSecondsRemaining] =
    useState(dataRemainingSeconds);

  let expireTime = 0;

  const checkInactivity = () => {
    const remaining = Math.max(0, Math.floor((expireTime - Date.now()) / 1000));
    setSecondsRemaining(remaining);

    if (expireTime < Date.now()) {
      // auth?.signOut();
      localStorage.removeItem("token");
    }
  };

  const updateExpireTime = () => {
    expireTime = Date.now() + 5 * 60 * 1000;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      checkInactivity();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    updateExpireTime();
    const events = ["mousemove", "keypress", "click", "scroll"];

    events.map(event => {
      return document.addEventListener(event, updateExpireTime);
    });

    return () => {
      events.map(event => {
        return document.addEventListener(event, updateExpireTime);
      });
    };
  }, []);

  return { secondsRemaining };
};

export default useAutoLogout;
