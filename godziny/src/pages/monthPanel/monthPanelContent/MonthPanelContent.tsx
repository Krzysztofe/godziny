import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BorderInline from "../../../components/BorderInline";
import HoursSummary from "../HoursSummary";
import Columns from "../columns/Columns";
import ColumnsHeader from "../columnsHeader.tsx/ColumnsHeader";
import "./_monthPanelContent.scss";
import CurrentMonth from "../currentMonth/CurrentMonth";

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
        <div className="px-2 px-sm-5 px-md-3 pb-3 _anim-opacity">
          <BorderInline />
          <HoursSummary />
          <CurrentMonth />
          <ColumnsHeader />
          <Columns />
        </div>
      )}
    </>
  );
};

export default MonthPanelContent;
