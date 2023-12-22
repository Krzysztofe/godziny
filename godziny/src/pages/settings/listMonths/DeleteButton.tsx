import Button from "react-bootstrap/Button";
import { RiDeleteBin6Line } from "react-icons/ri";
import useHTTPState from "../../../hooks/useHTTPState";
import { useDeleteMonthMutation } from "../../../services/apiSliceMonths";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { printAlert } from "../../../redux/storeFeatures/alertSlice";

type Props = {
  idx: number;
  monthDate?: string | null;
  setMonthDate: React.Dispatch<React.SetStateAction<string>>;
};

const DeleteButton = (props: Props) => {
  const dispatch = useDispatch();

  const [deleteMonth, success] = useDeleteMonthMutation();
  const { btnContent } = useHTTPState(
    success,
    <RiDeleteBin6Line className="text-danger fs-5 ms-auto" />
  );
  const { listMonths } = useSelector((state: RootState) => state.listMonths);

  const handleAlert = (monthDate: string, idx: number) => {
    dispatch(printAlert("Usunąć miesiąc?"));
    props.setMonthDate(monthDate);
  };

  return (
    <Button
      disabled={success.isLoading}
      onClick={() =>
        listMonths && handleAlert(listMonths[props.idx], props.idx)
      }
      className="ms-auto bg-transparent border-0 p-1"
    >
      {listMonths && props.monthDate === listMonths[props.idx] ? (
        btnContent
      ) : (
        <RiDeleteBin6Line className="text-danger fs-5 ms-auto" />
      )}
    </Button>
  );
};

export default DeleteButton;
