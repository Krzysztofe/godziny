import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import useURLValues from "../../hooks/useURLValues";
import FormDayContext from "./formDay/FormDayContext";
import CollapseFormHours from "../collapseFormHours/CollapseFormHours";
import SidebarMonthFormColapse from "./sidebarMonthFormCollapse/SidebarMonthFormColapse";
import CollapseMonths from "../collapseMonths/CollapseMonths";
import MonthHoursSummary from "../../pages/monthPanel/monthPanelHeader/MonthPanelHeaderSummary";

const SidebarBody = () => {
  const { isMonthInURL } = useURLValues();

  return (
    <Offcanvas.Body className="flex-grow-0 p-2 bg-white rounded">
      {/* <SidebarMonthFormColapse /> */}
      <MonthHoursSummary />
      {isMonthInURL && <CollapseMonths />}

      <CollapseFormHours />

      {isMonthInURL && <FormDayContext />}
    </Offcanvas.Body>
  );
};

export default SidebarBody;
