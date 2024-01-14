import { Spinner } from "react-bootstrap";

type Props = {
  styles: (contentJSX: React.ReactNode) => JSX.Element;
};

const RequestLoading = (props: Props) => {
  return (
    <>
      {props.styles(
        <Spinner animation="border" variant="primary" className="fs-5">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </>
  );
};

export default RequestLoading;
