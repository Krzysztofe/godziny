import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import useBtnContent from "../../../../hooks/useBtnContent";
import { RootState } from "../../../../redux/store";
import useAlertDelete from "../../../../hooks/useAlertDelete";
import useMonthDate from "../useMonthDate";
import useDeleteMonthAsync from "./useDeleteMonthAsync";
import IconTrash from "../../../../components/icons/IconTrash";
import { useContext } from "react";
import { MonthItemContext } from "../ListMonths";

const ButtonDeleteMonth = () => {
  const {monthIdx, id} = useContext(MonthItemContext);
  const { deleteMonthAsync, success } = useDeleteMonthAsync(id);
  const { btnContent } = useBtnContent(success.isLoading, <IconTrash />);
  const { monthDate } = useMonthDate(monthIdx);
  const { listMonths } = useSelector((state: RootState) => state.listMonths);

  const { handleAlert, alert } = useAlertDelete(
    deleteMonthAsync,
    "Usunąć miesiąc?"
  );


  const print = listMonths && monthDate === listMonths[monthIdx];

  return (
    <>
      {alert}
      <Button
        disabled={success.isLoading}
        onClick={handleAlert}
        className="py-0 _d-center ms-auto bg-transparent border-0"
      >
        {print ? btnContent : <IconTrash />}
      </Button>
    </>
  );
};

export default ButtonDeleteMonth;
