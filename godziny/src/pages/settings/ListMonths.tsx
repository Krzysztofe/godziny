import { useState } from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import useHTTPState from "../../hooks/useHTTPState";
import useMonthDates from "../../hooks/useMonthDates";
import { RootState } from "../../redux/store";
import {
  useDeleteMonthMutation,
  useUpdateListMonthsMutation,
} from "../../services/apiSliceMonths";
import { alertHelper } from "../../utils/alertHelpers";

const ListMonths = () => {
  const { databaseMonthsDatesToString } = useMonthDates();
  const [deleteMonth, success] = useDeleteMonthMutation();
  const [updateListMonths, successInfo] = useUpdateListMonthsMutation();
  const { listMonths } = useSelector((state: RootState) => state.listMonths);
  const { btnContent } = useHTTPState(
    success,
    <RiDeleteBin6Line className="text-danger fs-6 ms-auto" />
  );
  const [id, setId] = useState("");

  const handleDelete = async (e: any) => {
    Swal.fire(alertHelper("Usunąć miesiąc?")).then(async result => {
      if (result.isConfirmed) {
        const targetElement = e.target as HTMLDivElement;
        const targetId = targetElement.id;
        setId(targetId);

        const updatedListMonths = listMonths.filter(month => {
          return month !== targetId;
        });

        const year = targetId.slice(0, 4);
        const month = targetId.slice(-2);
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
              disabled={success.isLoading}
              id={listMonths[idx]}
              onClick={e => handleDelete(e)}
              className="d-flex justify-content-between align-items-center shadow-sm p-0 mb-2 px-1 rounded text-capitalize cursor-pointer"
              // className="shadow-sm p-0 mb-2 ps-2 pe-0 rounded-1"
            >
              <>{monthDateToString}</>
              <Button
                className="d-flex justify-content-between align-items-center px-1 bg-white border-0 text-capitalize"
                // className="w-100 d-flex justify-content-between align-items-center px-1 text-capitalize rounded-0  border-0 color-primary"
              >
                {id === listMonths[idx] ? (
                  btnContent
                ) : (
                  <RiDeleteBin6Line className="text-danger fs-6 ms-auto" />
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
