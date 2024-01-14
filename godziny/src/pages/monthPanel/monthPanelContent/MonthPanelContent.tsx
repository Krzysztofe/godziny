import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BorderInline from "../../../components/BorderInline";
import useMonthURLToString from "../../../hooks/useMonthURLToString";
import HoursSummary from "../HoursSummary";
import Columns from "../columns/Columns";
import useScrollThumbPosition from "../columns/hooks/useScrollThumbPosition";
import ColumnsHeader from "../columnsHeader.tsx/ColumnsHeader";
import "./_monthPanelContent.scss";

const MonthPanelContent = () => {
  const { pathname } = useLocation();
  const [isAnimate, setAnimate] = useState(false);
  const { scrollableRef, thumbPosition, handleScroll } =
    useScrollThumbPosition();

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
          <ColumnsHeader />
          <Columns />
        </div>
      )}
    </>
  );
};

export default MonthPanelContent;
