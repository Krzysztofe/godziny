import { useEffect, useRef, useState } from "react";
import Row from "react-bootstrap/Row";
import SidebarMonthCollapse from "../MonthPanelMonthsCollapse";
import MonthPanelHeaderSummary from "./MonthPanelHeaderSummary";

const MonthPanelHeader = () => {
  return (
    <Row
      className="mb-1 col-xxl-9"
    >
      <SidebarMonthCollapse />
      <MonthPanelHeaderSummary />
    </Row>
  );
};

export default MonthPanelHeader;
