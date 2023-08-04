import { useEffect, useRef, useState } from "react";
import Row from "react-bootstrap/Row";
import SidebarMonthCollapse from "../../../components/sidebar/SidebarMonthCollapse";
import MonthPanelHeaderSummary from "./MonthPanelHeaderSummary";

const MonthPanelHeader = () => {
  return (
    <header className="me-3">
      <Row className="col-sm-8 col-md-9 col-xl-8 col-xxl-8 ms-sm-auto mx-xl-auto px-1 ">
        <SidebarMonthCollapse />
        <MonthPanelHeaderSummary />
      </Row>
    </header>
  );
};

export default MonthPanelHeader;
