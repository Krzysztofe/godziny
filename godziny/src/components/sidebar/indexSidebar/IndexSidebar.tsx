import React from "react";
import { useLocation } from "react-router-dom";
import useReduxListMonths from "../../../hooks/updateReduxDatabase/useReduxListMonths";
import useReduxListUsers from "../../../hooks/updateReduxDatabase/useReduxListUsers";
import Nav from "../Nav/Nav";
import useDataSidebar from "../useDataSidebar";
import "./_indexSidebar.scss";
import ToastsContainer from "../ToastsContainer";
import useInPathname from "../../../hooks/useInPathname";

const IndexSidebar = () => {
  useReduxListUsers();
  useReduxListMonths();
  const { inPathname: isMonthPanel } = useInPathname("202");
  const { inPathname: isSettings } = useInPathname("ustawienia");
  const { dataMonthPanel, dataSettings } = useDataSidebar();

  return (
    <>
      <ToastsContainer />
      <div className="_sidebar p-md-0">
        <div className="_sidebar__wrapper _scrolHidden">
          <div className="_sidebar__body">
            {isMonthPanel &&
              dataMonthPanel.map((component, idx) => {
                return <React.Fragment key={idx}>{component}</React.Fragment>;
              })}

            {isSettings &&
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
