import Swal from "sweetalert2";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { RiDeleteBin6Line } from "react-icons/ri";
import useHTTPState from "../../../hooks/useHTTPState";
import { alertHelper } from "../../../utils/alertHelpers";
import {
  useDeleteMonthMutation,
  useUpdateMonthInfoMutation,
} from "../../../services/apiSliceMonths";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

interface Props {
  monthDateToString: string;
  monthDate: string;
}

const SettingsMonthsListItem = (props: Props) => {
  const [deleteMonth, success] = useDeleteMonthMutation();
  const [updateMonthInfo, successInfo] = useUpdateMonthInfoMutation();
  const { infoMonths } = useSelector((state: RootState) => state.infoMonths);

  const { btnContent } = useHTTPState(
    success,
    <RiDeleteBin6Line className="text-danger fs-5 ms-auto" />
  );

  const handleDelete = async () => {
    Swal.fire(alertHelper("Chcesz usuniąć użytkownika?")).then(async result => {
      if (result.isConfirmed) {
        const year = props.monthDate.slice(0, 4);
        const month = props.monthDate.slice(-2);

        const updatedMonthsInfo = infoMonths.filter((infoMonth: string) => {
          return infoMonth !== `${year}-${month}`;
        });

        await deleteMonth({ year: year, month: month });
        await updateMonthInfo(updatedMonthsInfo);
      }
    });
  };

  return (
    <ListGroup.Item onClick={handleDelete} className="border-0 p-0 px-1 ">
      <Button
        disabled={success.isLoading}
        className="w-100 d-flex justify-content-between align-items-center px-1 bg-primary-subtle text-capitalize border-0 fs-5"
      >
        {props.monthDateToString} {btnContent}
      </Button>
    </ListGroup.Item>
  );
};

export default SettingsMonthsListItem;
