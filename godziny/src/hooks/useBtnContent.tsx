import Spinner from "react-bootstrap/Spinner";

const useBtnContent = (isLoading: boolean, btn:  JSX.Element) => {
  let btnContent: JSX.Element = btn;

  if (isLoading) {
    btnContent = (
      <Spinner
        animation="border"
        size="sm"
        variant="primary"
        className="text-dark"
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return { btnContent };
};

export default useBtnContent;
