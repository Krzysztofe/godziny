import Button from "react-bootstrap/Button";
import useWindowWidth from "../../hooks/useWindowWidth";

type Props = {
  toggleShow: ()=>void;
};

const SidebarMenuButton = (props: Props) => {
  const { windowWidth } = useWindowWidth();

  return (
    <Button
      variant="info"
      onClick={props.toggleShow}
      className={`rounded-0 p-0 fw-medium w-100 ${
        windowWidth > 500 ? "d-none" : "d-block"
      }`}
      style={{
        position: "fixed",
        height: "2.5rem",
        bottom: 0,
      }}
    >
      Menu
    </Button>
  );
};

export default SidebarMenuButton;
