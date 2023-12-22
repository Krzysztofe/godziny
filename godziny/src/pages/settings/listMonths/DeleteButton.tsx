import Button from "react-bootstrap/Button";
import { RiDeleteBin6Line } from "react-icons/ri";
import useHTTPState from "../../../hooks/useHTTPState";
import { useDeleteMonthMutation } from "../../../services/apiSliceMonths";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { printAlert } from "../../../redux/storeFeatures/alertSlice";
import { useEffect, useState } from "react";
import {
  agreeAlert,
  closeAlert,
} from "../../../redux/storeFeatures/alertSlice";
import Alert from "../../../components/alert/Alert";

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
  const { agree } = useSelector((state: RootState) => state.alert);
  const [isAlertPrinted, setIsAlertPrinted] = useState(false);

  const handleAlert = (monthDate: string, idx: number) => {
    props.setMonthDate(monthDate);
    setIsAlertPrinted(true);
  };

  const deleteMonthAsync = async () => {
    if (props?.monthDate && listMonths?.includes(props.monthDate)) {
      const year = props.monthDate.slice(0, 4);
      const month = props.monthDate.slice(-2);
      await deleteMonth({ year: year, month: month });
    }
  };

  // console.log("button", agree);

  // useEffect(() => {
  //   deleteMonthAsync();
  //   dispatch(agreeAlert(false));
  //   dispatch(closeAlert());
  // }, [agree]);

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
    </>
  );
};

export default DeleteButton;
