import Button from "react-bootstrap/Button";
import useMonthURLToString from "../../hooks/useMonthURLToString";
import useURLValues from "../../hooks/useURLValues";

type Props = {
  toggleShow: () => void;
};

const SidebarMenuButton = (props: Props) => {
  const { monthURLStringFormat } = useMonthURLToString();
  const { isMonthInURL } = useURLValues();

  return (
    <Button
      variant="primary"
      onClick={props.toggleShow}
      className= "d-flex d-sm-none justify-content-center align-items-center rounded-0 p-0 fw-medium w-100 px-4 fixed-bottom"
      style={{
        height: "2.5rem",
      }}
    >
      <div>Menu:&nbsp;</div>
      {isMonthInURL ? <div>{monthURLStringFormat}</div> : <div>ustawienia</div>}
    </Button>
  );
};

export default SidebarMenuButton;
