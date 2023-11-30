import Offcanvas from "react-bootstrap/Offcanvas";
import useWindowWidth from "../../hooks/useWindowWidth";

const SidebarHeader = () => {
  const { windowWidth } = useWindowWidth();

  return (
    <>
      {windowWidth < 500 && (
        <Offcanvas.Header
          closeButton={true}
          style={{ width: "fit-content", marginLeft: "auto" }}
        ></Offcanvas.Header>
      )}
    </>
  );
};

export default SidebarHeader;
