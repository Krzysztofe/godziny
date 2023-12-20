import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HoursSummary from "../../../components/HoursSummary";
import MonthPanelColumns from "../monthPanelColmns/MonthPanelColumns";

const MonthPanelContent = () => {
  const { pathname } = useLocation();
  const [isAnimate, setAnimate] = useState(false);



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
      {isAnimate && (
        <div
          className="py-1 opacityAnimation"
          style={{
            maxWidth: "1000px",
            width: "100%",
          }}
        >
          <HoursSummary />
          <MonthPanelColumns />
        </div>
      )}
    </>
  );
};

export default MonthPanelContent;
