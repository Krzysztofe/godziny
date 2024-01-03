import { printFormHoursContent } from "./utilsPrintContent";
import { Spinner } from "react-bootstrap";

const RequestLoadingFormHours = () => {
  return (
    <>
      {printFormHoursContent(
        <Spinner animation="border" variant="secondary" className="fs-6">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </>
  );
};

export default RequestLoadingFormHours;
