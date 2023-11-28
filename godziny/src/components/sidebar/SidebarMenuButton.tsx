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
      className={`rounded-0 p-0 fw-medium z-1 ${
        windowWidth > 575 ? "d-none" : "d-block"
      }`}
      style={{
        position: "absolute",
        height: "2.5rem",
        width: "100%",
        right: 0,
        bottom: 0,
      }}
    >
      Menu
    </Button>
  );
};

export default SidebarMenuButton;
