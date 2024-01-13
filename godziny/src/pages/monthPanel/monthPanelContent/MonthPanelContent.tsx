import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HoursSummary from "../HoursSummary";
import Columns from "../columns/Columns";
import "./_monthPanelContent.scss";
import SidebarBody from "../../../components/sidebar/SidebarBody";
import IndexX from "../../../components/x/IndexX";
import useScrollThumbPosition from "../columns/hooks/useScrollThumbPosition";
import ColumnsHeader from "../columnsHeader.tsx/ColumnsHeader";
import CollapseContainer from "../../../components/collapseContainer/CollapseContainer";
import ListMonthsInCollapse from "../../../components/sidebar/listMonthsInCollapse/ListMonthsInCollapse";
import useMonthURLToString from "../../../hooks/useMonthURLToString";
import BorderInline from "../../../components/BorderInline";

const MonthPanelContent = () => {
  const { pathname } = useLocation();
  const [isAnimate, setAnimate] = useState(false);
  const { scrollableRef, thumbPosition, handleScroll } =
    useScrollThumbPosition();

  const { monthURLStringFormat } = useMonthURLToString();
  const monthStringCapitalize =
    monthURLStringFormat[0]?.toUpperCase() + monthURLStringFormat.slice(1);

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
        <div className="px-2 pb-2">
          <BorderInline />
          <HoursSummary />
          <ColumnsHeader thumbPosition={thumbPosition} />
          <Columns />
        </div>
      )}
    </>
  );
};

export default MonthPanelContent;
