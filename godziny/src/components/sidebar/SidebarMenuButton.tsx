import Button from "react-bootstrap/Button";
import useWindowWidth from "../../hooks/useWindowWidth";
import useMonthURLToString from "../../hooks/useMonthURLToString";

type Props = {
  toggleShow: () => void;
};

const SidebarMenuButton = (props: Props) => {
  const { windowWidth } = useWindowWidth();
  const { monthURLStringFormat } = useMonthURLToString();

  return (
    <Button
      variant="info"
      onClick={props.toggleShow}
      className={`${
        windowWidth >= 500 ? "d-none" : "d-flex"
      } justify-content-center align-items-center rounded-0 p-0 fw-medium w-100 px-4`}
      style={{
        position: "fixed",
        height: "2.5rem",
        bottom: 0,
      }}
    >
      <div>Menu:&nbsp; </div> <div> {monthURLStringFormat}</div>
    </Button>
  );
};

export default SidebarMenuButton;
