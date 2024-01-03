import { Spinner } from "react-bootstrap";
import { printPanelLoadingContent } from "../../utils/printPanelContent";

;

const RequestLoading = () => {
  return (
    <>
      {printPanelLoadingContent(
        <Spinner animation="border" variant="secondary" className="fs-6">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </>
  );
};

export default RequestLoading;
