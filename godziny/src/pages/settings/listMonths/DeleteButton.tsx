import { useState } from "react";
import Button from "react-bootstrap/Button";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import Alert from "../../../components/alert/Alert";
import useHTTPState from "../../../hooks/useHTTPState";
import { RootState } from "../../../redux/store";
import { useDeleteMonthMutation } from "../../../services/apiSliceMonths";
import useMonthDate from "./useMonthDate";
import { useDispatch } from "react-redux";
import { setCollapseIndex } from "../../../redux/storeFeatures/listMonthsSlice";

type Props = {
  idx: number;
};

const DeleteButton = (props: Props) => {
  const dispatch = useDispatch();
  const [deleteMonth, success] = useDeleteMonthMutation();
  const { btnContent } = useHTTPState(
    success,
    <RiDeleteBin6Line className="text-danger fs-5 ms-auto" />
  );
  const { monthDate } = useMonthDate(props.idx);
  const { listMonths } = useSelector((state: RootState) => state.listMonths);
  const [isAlertPrinted, setIsAlertPrinted] = useState(false);

  const handleAlert = () => {
    setIsAlertPrinted(true);
  };

  const deleteMonthAsync = async () => {
    if (monthDate && listMonths?.includes(monthDate)) {
      dispatch(setCollapseIndex(-1));
      const year = monthDate.slice(0, 4);
      const month = monthDate.slice(-2);
      await deleteMonth({ year: year, month: month });
    }
  };

  return (
    <>
      <Alert
        action={deleteMonthAsync}
        isPrinted={isAlertPrinted}
        setIsPrinted={setIsAlertPrinted}
        header={"Usunąć miesiąc"}
      />
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

export default DeleteButton;
