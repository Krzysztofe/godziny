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
    <Offcanvas.Body className="_scrolHidden p-0">
      {isMonthInURL &&
        dataMonthPanel.map((component, idx) => {
          return <React.Fragment key={idx}>{component}</React.Fragment>;
        })}

        

      {pathname === "/ustawienia" &&
        dataSettings.map((component, idx) => {
          return <React.Fragment key={idx}>{component}</React.Fragment>;
        })}
    </Offcanvas.Body>
  );
};

export default SidebarBody;
