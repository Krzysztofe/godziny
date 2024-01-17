import Button from "react-bootstrap/Button";
import { RiDeleteBin6Line } from "react-icons/ri";
import useBtnContent from "../../../hooks/useBtnContent";
import { ModelDay } from "../../../sharedModels/modelDay";
import useAlertDelete from "../../../hooks/useAlertDelete";
import useDeleteDayAsync from "./useDeleteDayAsync";
import IconTrash from "../../../components/icons/IconTrash";

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

  const { btnContent } = useBtnContent(success.isLoading, <IconTrash />);

  return (
    <>
      {alert}
      <Button
        onClick={handleAlert}
        className="d-flex justify-content-between fs-4 _fw-semiBold align-items-center w-100 p-0 bg-transparent border-0 text-dark"
        disabled={success.isLoading}
      >
        <div>{props.day?.hours} h</div>
        <div>{btnContent}</div>
      </Button>
    </>
  );
};

export default ButtonDeleteDay;
