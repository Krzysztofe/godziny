import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HoursSummary from "../HoursSummary";
import Columns from "../columns/Columns";

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
          className="pe-1 pb-1 opacityAnimation"
          style={{
            maxWidth: "1000px",
            width: "100%",
          }}
        >
          <HoursSummary />
          <Columns />
        </div>
      )}
    </>
  );
};

export default MonthPanelContent;
