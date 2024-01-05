import Button from "react-bootstrap/Button";
import { RiDeleteBin6Line } from "react-icons/ri";
import useHTTPState from "../../../hooks/useHTTPState";
import { ModelDay } from "../../../sharedModels/modelDay";
import useAlertDelete from "../../../hooks/useAlertDelete";
import useDeleteDayAsync from "./useDeleteDayAsync";

type Props = {
  day: ModelDay;
  columnIdx: number;
};

const ButtonDeleteDay = (props: Props) => {
  const { deleteDayAsync, success } = useDeleteDayAsync(
    props.day,
    props.columnIdx
  );
  const { handleAlert, alert } = useAlertDelete(
    deleteDayAsync,
    "Usunąć dzień?"
  );
  const { btnContent } = useHTTPState(
    success,
    <RiDeleteBin6Line className="text-danger" />
  );

  return (
    <>
      {alert}
      <Button
        onClick={handleAlert}
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
