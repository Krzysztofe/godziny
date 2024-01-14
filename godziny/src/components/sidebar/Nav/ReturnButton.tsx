import { createBrowserHistory } from "history";
import Button from "react-bootstrap/Button";
import { ImArrowLeft } from "react-icons/im";

const ReturnButton = () => {
  const history = createBrowserHistory();
  const handleGoBack = () => {
    history.back();
  };
  return (
    <Button
      onClick={handleGoBack}
      className="text-light-emphasis p-0 bg-transparent border-0 w-100 d-flex align-items-center_cursor-pointer"
    >
      <ImArrowLeft className=" me-1 align-self-center " /> Wróć
    </Button>
  );
};

export default ReturnButton;
