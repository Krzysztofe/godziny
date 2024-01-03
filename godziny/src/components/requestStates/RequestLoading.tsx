import { Spinner } from "react-bootstrap";
import { printContentContainer } from "./utilsPrintContent";



const RequestLoading = () => {
  return (
    <>
      {printContentContainer(
        <Spinner animation="border" variant="secondary" className="fs-6">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </>
  );
};

export default RequestLoading;
