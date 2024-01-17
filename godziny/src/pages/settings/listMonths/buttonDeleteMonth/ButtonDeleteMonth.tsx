import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import useBtnContent from "../../../../hooks/useBtnContent";
import { RootState } from "../../../../redux/store";
import useAlertDelete from "../../../../hooks/useAlertDelete";
import useMonthDate from "../useMonthDate";
import useDeleteMonthAsync from "./useDeleteMonthAsync";
import IconTrash from "../../../../components/icons/IconTrash";

type Props = {
  idx: number;
};

const ButtonDeleteMonth = (props: Props) => {
  const { deleteMonthAsync, success } = useDeleteMonthAsync(props.idx);
  const { btnContent } = useBtnContent(success.isLoading, <IconTrash />);
  const { monthDate } = useMonthDate(props.idx);
  const { listMonths } = useSelector((state: RootState) => state.listMonths);

  const { handleAlert, alert } = useAlertDelete(
    deleteMonthAsync,
    "Usunąć miesiąc?"
  );

  const print = listMonths && monthDate === listMonths[props.idx];

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
