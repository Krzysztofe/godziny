import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import useHTTPState from "../../../hooks/useHTTPState";
import { RootState } from "../../../redux/store";
import {
  useDeleteMonthMutation,
  useUpdateMonthInfoMutation,
} from "../../../services/apiSliceMonths";
import { alertHelper } from "../../../utils/alertHelpers";

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
    <RiDeleteBin6Line className="text-danger fs-6 ms-auto" />
  );

  const handleDelete = async () => {
    Swal.fire(alertHelper("Usunąć miesiąc?")).then(async result => {
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
    <ListGroup.Item className="d-flex justify-content-between align-items-center shadow-sm p-0 mb-2 px-1 rounded">
      {" "}
      {props.monthDateToString}{" "}
      <Button
        onClick={handleDelete}
        disabled={success.isLoading}
        className="d-flex justify-content-between align-items-center px-1 bg-white border-0 text-capitalize"
      >
        {btnContent}
      </Button>
    </ListGroup.Item>
  );
};

export default SettingsMonthsListItem;
