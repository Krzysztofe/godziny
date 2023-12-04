import Offcanvas from "react-bootstrap/Offcanvas";
import useURLValues from "../../hooks/useURLValues";
import useDataSidebar from "./useDataSidebar";

const SidebarBody = () => {
  const { isMonthInURL } = useURLValues();
  const { dataMonthPanel, dataSettings } = useDataSidebar();

  return (
    <Offcanvas.Body className="scrolHidden flex-grow-0 p-0 border border-4 border-white bg-white rounded">
      {isMonthInURL &&
        dataMonthPanel.map(component => {
          return component;
        })}

      {!isMonthInURL &&
        dataSettings.map(component => {
          return component;
        })}
    </Offcanvas.Body>
  );
};

export default SidebarBody;
