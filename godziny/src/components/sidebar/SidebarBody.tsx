import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import useURLValues from "../../hooks/useURLValues";
import useDataSidebar from "./useDataSidebar";
import { useLocation } from "react-router-dom";


const SidebarBody = () => {
  const { pathname } = useLocation();
  const { isMonthInURL } = useURLValues();
  const { dataMonthPanel, dataSettings } = useDataSidebar();

  return (
    <Offcanvas.Body className="scrolHidden flex-grow-0 p-0 border border-4 border-white bg-white rounded">
      {isMonthInURL &&
        dataMonthPanel.map((component, idx) => {
          return <React.Fragment key={idx}>{component}</React.Fragment>;
        })}
  
      {pathname === "/godziny/ustawienia" &&
        dataSettings.map((component, idx) => {
          return <React.Fragment key={idx}>{component}</React.Fragment>;
        })}
    </Offcanvas.Body>
  );
};

export default SidebarBody;
