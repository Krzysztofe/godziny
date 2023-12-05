import { useState } from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import useHTTPState from "../../../hooks/useHTTPState";
import useMonthDates from "../../../hooks/useMonthDates";
import { RootState } from "../../../redux/store";
import {
  useDeleteMonthMutation,
  useUpdateListMonthsMutation,
} from "../../../services/apiSliceMonths";
import { alertHelper } from "../../../utils/alertHelpers";
import {
  dataStylesButton,
  dataStylesListGroupItem,
} from "./dataStylesSettingsLists";

const ListMonths = () => {
  const { databaseMonthsDatesToString } = useMonthDates();
  const [deleteMonth, success] = useDeleteMonthMutation();
  const [updateListMonths, successInfo] = useUpdateListMonthsMutation();
  const { listMonths } = useSelector((state: RootState) => state.listMonths);
  const { btnContent } = useHTTPState(
    success,
    <RiDeleteBin6Line className="text-danger fs-5 ms-auto" />
  );
  const [monthDate, setMonthDate] = useState("");

  const handleDelete = async (monthDate: string) => {
    Swal.fire(alertHelper("Usunąć miesiąc?")).then(async result => {
      if (result.isConfirmed) {
        setMonthDate(monthDate);

        const updatedListMonths = listMonths?.filter(month => {
          return month !== monthDate;
        });

        const year = monthDate.slice(0, 4);
        const month = monthDate.slice(-2);
        await deleteMonth({ year: year, month: month });
        await updateListMonths(updatedListMonths);
      }
    });
  };

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
                disabled={
                  monthDate === listMonths[idx] ? success.isLoading : false
                }
                id={listMonths[idx]}
                onClick={() => handleDelete(listMonths[idx])}
                className={`${dataStylesButton} text-dark`}
              >
                {monthDateToString}
                {monthDate === listMonths[idx] ? (
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
