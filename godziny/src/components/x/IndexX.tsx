import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import useReduxListMonths from "../../hooks/updateReduxDatabase/useReduxListMonths";
import useReduxListUsers from "../../hooks/updateReduxDatabase/useReduxListUsers";
import useMonthURLToString from "../../hooks/useMonthURLToString";
import useURLValues from "../../hooks/useURLValues";
import SidebarNav from "../sidebar/sidebarNav/SidebarNav";
import useDataSidebar from "../sidebar/useDataSidebar";
import "./_indexX.scss";

const IndexX = () => {
  useReduxListUsers();
  useReduxListMonths();

  const { pathname } = useLocation();
  const { dataMonthPanel, dataSettings } = useDataSidebar();

  return (
    <>
      <div className="div p-md-0">
        <div className="_sidebar__wrapper">
          {pathname.includes("202") &&
            dataMonthPanel.map((component, idx) => {
              return <React.Fragment key={idx}>{component}</React.Fragment>;
            })}

          {pathname.includes("ustawienia") &&
            dataSettings.map((component, idx) => {
              return <React.Fragment key={idx}>{component}</React.Fragment>;
            })}
          <div className="d-none d-md-block">
            <div className="border my-2"></div>
            <SidebarNav />
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexX;
