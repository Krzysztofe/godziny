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
  const { monthURLStringFormat } = useMonthURLToString();
  const monthStringCapitalize =
    monthURLStringFormat[0]?.toUpperCase() + monthURLStringFormat.slice(1);

  const { pathname } = useLocation();
  const { isMonthInURL } = useURLValues();
  const { dataMonthPanel, dataSettings } = useDataSidebar();

  const [isShow, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <>
      <div className="div">
        {isMonthInURL &&
          dataMonthPanel.map((component, idx) => {
            return <React.Fragment key={idx}>{component}</React.Fragment>;
          })}

        {pathname === "/ustawienia" &&
          dataSettings.map((component, idx) => {
            return <React.Fragment key={idx}>{component}</React.Fragment>;
          })}
        <div className="d-none d-md-block">
          <SidebarNav />
        </div>
      </div>
      {/* <div style={{ height: 30 }}></div>/ */}
    </>
  );
};

export default IndexX;
