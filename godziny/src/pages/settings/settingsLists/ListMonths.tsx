import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import useHTTPState from "../../../hooks/useHTTPState";
import useMonthDates from "../../../hooks/useMonthDates";
import { RootState } from "../../../redux/store";
import {
  agreeAlert,
  closeAlert,
  printAlert,
} from "../../../redux/storeFeatures/alertSlice";
import {
  useDeleteMonthMutation,
  useUpdateListMonthsMutation,
} from "../../../services/apiSliceMonths";
import {
  dataStylesButton,
  dataStylesListGroupItem,
} from "./dataStylesSettingsLists";



const ListMonths = () => {
  const dispatch = useDispatch();
  const { databaseMonthsDatesToString } = useMonthDates();
  const [deleteMonth, success] = useDeleteMonthMutation();
  const [updateListMonths, successInfo] = useUpdateListMonthsMutation();
  const { listMonths } = useSelector((state: RootState) => state.listMonths);
  const { btnContent } = useHTTPState(
    success,
    <RiDeleteBin6Line className="text-danger fs-5 ms-auto" />
  );
  const { agree } = useSelector((state: RootState) => state.alert);
  const [monthDate, setMonthDate] = useState("");




  const handleAlert = (monthDate: string) => {
    dispatch(printAlert("Usunąć miesiąc?"));
    setMonthDate(monthDate);
  };

  const deleteMonthAsync = async () => {
    if (agree && monthDate && listMonths?.includes(monthDate)) {
      const updatedListMonths = listMonths?.filter(month => {
        return month !== monthDate;
      });

      const year = monthDate.slice(0, 4);
      const month = monthDate.slice(-2);
      await deleteMonth({ year: year, month: month });
    }
  };

  useEffect(() => {
    deleteMonthAsync();
    dispatch(agreeAlert(false));
    dispatch(closeAlert());
  }, [agree]);

  return (
    <>
      {databaseMonthsDatesToString?.map(
        (monthDateToString: string, idx: number) => {
          return (
            <ListGroup.Item
              key={monthDateToString}
              className={dataStylesListGroupItem}
            >
              <Button
                disabled={success.isLoading}
                onClick={() => listMonths && handleAlert(listMonths[idx])}
                className={`${dataStylesButton} text-dark`}
              >
                {monthDateToString}
                {listMonths && monthDate === listMonths[idx] ? (
                  btnContent
                ) : (
                  <RiDeleteBin6Line className="text-danger fs-5 ms-auto" />
                )}
              </Button>
            </ListGroup.Item>
          );
        }
      )}
    </>
  );
};

export default ListMonths;
