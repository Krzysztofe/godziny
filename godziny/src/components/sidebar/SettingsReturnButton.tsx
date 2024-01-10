import { createBrowserHistory } from "history";
import Button from "react-bootstrap/Button";
import { ImArrowLeft } from "react-icons/im";

const SettingsReturnButton = () => {
  const history = createBrowserHistory();
  const handleGoBack = () => {
    history.back();
  };
  return (
    <Button
      onClick={handleGoBack}
      className="fs-6 fw-medium text-primary p-0 bg-transparent border-0 w-100 _cursor-pointer"
    >
      <div className="d-flex align-center  d-flex align-items-center text-start w-100 _fw-semiBold _fs-3">
        <ImArrowLeft className="_fs-3 me-1 " /> Wróć
      </div>
    </Button>
  );
};

export default SettingsReturnButton;
