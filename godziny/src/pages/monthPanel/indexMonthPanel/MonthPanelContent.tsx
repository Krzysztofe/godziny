import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HoursSummary from "../../../components/HoursSummary";
import MonthPanelColumns from "../monthPanelColmns/MonthPanelColumns";
import Alert from "../../../components/alert/Alert";

const MonthPanelContent = () => {
  const { pathname } = useLocation();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(false);
    const timeoutId = setTimeout(() => {
      setAnimate(true);
    });

    return () => {
      clearTimeout(timeoutId);
    };
  }, [pathname]);

  return (
    <>
      {animate && (
        <div
          className="py-1 opacityAnimation"
          style={{
            maxWidth: "1000px",
            width: "100%",
          }}
        >
          {/* <Alert/> */}
          <HoursSummary />
          <MonthPanelColumns />
        </div>
      )}
    </>
  );
};

export default MonthPanelContent;
