import { useEffect, useRef, useState } from "react";
import Row from "react-bootstrap/Row";
import SidebarMonthCollapse from "../MonthPanelMonthsCollapse";
import MonthPanelHeaderSummary from "./MonthPanelHeaderSummary";

const MonthPanelHeader = () => {
  return (
    <Row
      className="mb-1 col-xxl-9"

      // "ps-2 px-1"
      // "col-sm-8 col-md-9 col-xl-8 col-xxl-8 ms-sm-auto mx-xl-auto px-1 "
    >
      <SidebarMonthCollapse />
      <MonthPanelHeaderSummary />
    </Row>
  );
};

export default MonthPanelHeader;
