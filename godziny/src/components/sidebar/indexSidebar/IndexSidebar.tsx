import React from "react";
import { useLocation } from "react-router-dom";
import useReduxListMonths from "../../../hooks/updateReduxDatabase/useReduxListMonths";
import useReduxListUsers from "../../../hooks/updateReduxDatabase/useReduxListUsers";
import Nav from "../Nav/Nav";
import useDataSidebar from "../useDataSidebar";
import "./_indexSidebar.scss";
import ToastsContainer from "../ToastsContainer";

const IndexSidebar = () => {
  useReduxListUsers();
  useReduxListMonths();

  const { pathname } = useLocation();
  const { dataMonthPanel, dataSettings } = useDataSidebar();

  return (
    <>
      <ToastsContainer />
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
        </div>
        <div className="d-none d-md-block pt-2 ps-1 _sidebar__navContainer">
          <Nav />
        </div>
      </div>
    </>
  );
};

export default IndexSidebar;
