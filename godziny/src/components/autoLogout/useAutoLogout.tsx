import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const dataRemainingSeconds = 61;

const useAutoLogout = () => {
  const navigate = useNavigate();

  const [secondsRemaining, setSecondsRemaining] =
    useState(dataRemainingSeconds);

  let expireTime = 0;

  const checkInactivity = () => {
    const remaining = Math.max(0, Math.floor((expireTime - Date.now()) / 1000));
    setSecondsRemaining(remaining);

    if (expireTime < Date.now()) {
      localStorage.removeItem("token");
      navigate("/")
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
