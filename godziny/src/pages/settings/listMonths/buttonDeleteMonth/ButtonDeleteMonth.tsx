import Button from "react-bootstrap/Button";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import useHTTPState from "../../../../hooks/useHTTPState";
import { RootState } from "../../../../redux/store";
import useAlertDelete from "../../../../hooks/useAlertDelete";
import useMonthDate from "../useMonthDate";
import useDeleteMonthAsync from "./useDeleteMonthAsync";

type Props = {
  idx: number;
};

const ButtonDeleteMonth = (props: Props) => {
  const { deleteMonthAsync, success } = useDeleteMonthAsync(props.idx);
  const { btnContent } = useHTTPState(
    success.isLoading,
    <RiDeleteBin6Line className="text-light-emphasis fs-2 ms-auto" />
  );
  const { monthDate } = useMonthDate(props.idx);
  const { listMonths } = useSelector((state: RootState) => state.listMonths);

  const { handleAlert, alert } = useAlertDelete(
    deleteMonthAsync,
    "Usunąć miesiąc?"
  );

  const print = listMonths && monthDate === listMonths[props.idx];
  const icon = (
    <RiDeleteBin6Line className="text-light-emphasis fs-2 ms-auto" />
  );

  return (
    <>
      {alert}
      <Button
        disabled={success.isLoading}
        onClick={handleAlert}
        className="py-0 _d-center ms-auto bg-transparent border-0"
      >
        {print ? btnContent : icon}
      </Button>
    </>
  );
};

export default ButtonDeleteMonth;
