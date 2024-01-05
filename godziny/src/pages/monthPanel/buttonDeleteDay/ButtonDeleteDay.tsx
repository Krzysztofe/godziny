import Button from "react-bootstrap/Button";
import { RiDeleteBin6Line } from "react-icons/ri";
import useHTTPState from "../../../hooks/useHTTPState";
import { ModelDay } from "../../../sharedModels/modelDay";
import useAlertDay from "./hooks/useAlertDay";
import useFindDay from "./hooks/useFindDay";

type Props = {
  day: ModelDay;
  columnIdx: number;
};

const ButtonDeleteDay = (props: Props) => {
  const { handleAlert, alert, success } = useAlertDay(
    props.day,
    props.columnIdx
  );
  const { btnContent } = useHTTPState(
    success,
    <RiDeleteBin6Line className="text-danger" />
  );
  const { findDay } = useFindDay(props.day, props.columnIdx);


  return (
    <>
      {alert}
      <Button
        onClick={() => handleAlert(props.day?.id)}
        className="d-flex justify-content-between  align-items-center w-100 p-0 bg-transparent border-0 fw-medium text-dark"
        disabled={success.isLoading}
      >
        <div>{props.day?.hours} h</div>
        <div>{btnContent}</div>
      </Button>
    </>
  );
};

export default ButtonDeleteDay;
