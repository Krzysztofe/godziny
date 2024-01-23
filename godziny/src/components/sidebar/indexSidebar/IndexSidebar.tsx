import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import useReduxListMonths from "../../../hooks/updateReduxDatabase/useReduxListMonths";
import useReduxListUsers from "../../../hooks/updateReduxDatabase/useReduxListUsers";
import useIsPath from "../../../hooks/useIsPath";
import { setCollapseIndex } from "../../../redux/storeFeatures/listMonthsSlice";
import Nav from "../Nav/Nav";
import "./_indexSidebar.scss";
import useDataSidebar from "./useDataSidebar";

const IndexSidebar = () => {
  const dispatch = useDispatch();
  useReduxListUsers();
  useReduxListMonths();
  const { pathname } = useLocation();
  const { isPath: isMonthPanel } = useIsPath(["202"]);
  const { isPath: isSettings } = useIsPath(["ustawienia"]);
  const { dataMonthPanel, dataSettings } = useDataSidebar();
   

  useEffect(() => {
    dispatch(setCollapseIndex(-1));
  }, [pathname]);

  return (
    <>
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
