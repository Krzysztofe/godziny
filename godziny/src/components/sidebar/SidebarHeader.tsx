import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import useMonthURLToString from "../../hooks/useMonthURLToString";
import useWindowWidth from "../../hooks/useWindowWidth";

const SidebarHeader = () => {
  const { monthURLStringFormat } = useMonthURLToString();
  const { windowWidth } = useWindowWidth();

  return (
    <>
      {windowWidth < 575 && (
        <Offcanvas.Header closeButton={true} style={{width:"fit-content", marginLeft:"auto"}}>
          {/* <div className="text-capitalize fw-medium">{monthURLStringFormat}</div> */}
        </Offcanvas.Header>
      )}
    </>
  );
};

export default SidebarHeader;
