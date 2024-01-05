import { Spinner } from "react-bootstrap";


const LoadingPage = () => {

  return (
    <div className="d-center vh-100">
      <Spinner animation="border" variant="secondary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default LoadingPage;
