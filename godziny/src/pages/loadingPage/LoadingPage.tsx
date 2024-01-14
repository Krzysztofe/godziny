import { Spinner } from "react-bootstrap";

const LoadingPage = () => {
  return (
    <div className="_d-center vh-100">
      <Spinner animation="border" variant="primary" className="fs-5">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default LoadingPage;
