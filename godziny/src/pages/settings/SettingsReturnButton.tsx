import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { createBrowserHistory } from "history";
import { RiLogoutBoxLine } from "react-icons/ri";

const SettingsReturnButton = () => {
  const history = createBrowserHistory();
  const handleGoBack = () => {
    history.back();
  };
  return (
    <Button
      variant="outline-info"
      size="sm"
      className="d-flex align-items-center fw-middle fw-medium"
      onClick={handleGoBack}
    >
      <RiLogoutBoxLine className="fs-6 me-1 fw-middle " /> Wróć
    </Button>
  );
};

export default SettingsReturnButton;
