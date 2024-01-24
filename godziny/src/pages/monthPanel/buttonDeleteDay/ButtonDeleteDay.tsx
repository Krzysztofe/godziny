import Button from "react-bootstrap/Button";
import IconTrash from "../../../components/icons/IconTrash";
import useAlertDelete from "../../../hooks/useAlertDelete";
import useBtnContent from "../../../hooks/useBtnContent";
import { ModelDay } from "../../../sharedModels/modelDay";
import useDeleteDayAsync from "./useDeleteDayAsync";
import { useContext } from "react";
import { DayItemContext } from "../column/Column";

const ButtonDeleteDay = () => {
  const { day, columnIdx } = useContext(DayItemContext);
  const { deleteDayAsync, success } = useDeleteDayAsync(day, columnIdx);
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
        <div>{day?.hours} h</div>
        <div>{btnContent}</div>
      </Button>
    </>
  );
};

export default ButtonDeleteDay;
