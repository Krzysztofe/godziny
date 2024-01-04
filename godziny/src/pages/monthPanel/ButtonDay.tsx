import Button from "react-bootstrap/Button";
import { useDeleteDayMutation } from "../../services/apiSliceMonths";
import useHTTPState from "../../hooks/useHTTPState";
import { RiDeleteBin6Line } from "react-icons/ri";

const ButtonDay = () => {
  const [deleteDay, success] = useDeleteDayMutation();
  const { btnContent } = useHTTPState(
    success,
    <RiDeleteBin6Line className="text-danger" />
  );

  return (
    <Button
      className="d-flex justify-content-between  align-items-center w-100 p-0 bg-transparent border-0 fw-medium text-dark"
      disabled={success.isLoading}
    >
      <div>{btnContent}</div>
    </Button>
  );
};

export default ButtonDay;
