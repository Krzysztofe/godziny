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
    success,
    <RiDeleteBin6Line className="text-danger fs-5 ms-auto" />
  );
  const { monthDate } = useMonthDate(props.idx);
  const { listMonths } = useSelector((state: RootState) => state.listMonths);

  const { handleAlert, alert } = useAlertDelete(deleteMonthAsync);

  return (
    <>
      {alert}
      <Button
        disabled={success.isLoading}
        onClick={handleAlert}
        className="ms-auto bg-transparent border-0 p-1"
      >
        {listMonths && monthDate === listMonths[props.idx] ? (
          btnContent
        ) : (
          <RiDeleteBin6Line className="text-danger fs-5 ms-auto" />
        )}
      </Button>
    </>
  );
};

export default ButtonDeleteMonth;
