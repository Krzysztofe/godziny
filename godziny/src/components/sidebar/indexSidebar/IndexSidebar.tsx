import React from "react";
import { useLocation } from "react-router-dom";
import useReduxListMonths from "../../../hooks/updateReduxDatabase/useReduxListMonths";
import useReduxListUsers from "../../../hooks/updateReduxDatabase/useReduxListUsers";
import SidebarNav from "../sidebarNav/SidebarNav";
import useDataSidebar from "../useDataSidebar";
import "./_indexSidebar.scss";
import BorderInline from "../../BorderInline";

const IndexSidebar = () => {
  useReduxListUsers();
  useReduxListMonths();

  const { pathname } = useLocation();
  const { dataMonthPanel, dataSettings } = useDataSidebar();

  return (
    <>
      <div className="_sidebar p-md-0">
        <div className="_sidebar__wrapper _scrolHidden">
          <div className="_sidebar__body">
            {pathname.includes("202") &&
              dataMonthPanel.map((component, idx) => {
                return <React.Fragment key={idx}>{component}</React.Fragment>;
              })}

            {pathname.includes("ustawienia") &&
              dataSettings.map((component, idx) => {
                return <React.Fragment key={idx}>{component}</React.Fragment>;
              })}
          </div>
        </div>{" "}
        <div className="d-none d-md-block border-top pt-2">
          <SidebarNav />
        </div>
      </div>
    </>
  );
};

export default IndexSidebar;
