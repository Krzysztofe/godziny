import Offcanvas from "react-bootstrap/Offcanvas";

const SidebarHeader = () => {
  return (
    <Offcanvas.Header
      className="d-sm-none w-fit-content ms-auto"
      closeButton={true}
    ></Offcanvas.Header>
  );
};

export default SidebarHeader;
