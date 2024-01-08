import Offcanvas from "react-bootstrap/Offcanvas";
import ToastsMonthPanelContainer from "./ToastsMonthPanelContainer";
import { useLocation } from "react-router-dom";

const SidebarHeader = () => {
  const { pathname } = useLocation();
  return (
    <div>
      {pathname.includes("/godziny/202") && <ToastsMonthPanelContainer />}
      <Offcanvas.Header
        className="d-flex d-sm-none _w-fit-content ms-auto"
        closeButton={true}
      ></Offcanvas.Header>
    </div>
  );
};

export default SidebarHeader;
