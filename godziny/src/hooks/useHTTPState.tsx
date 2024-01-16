import { ReactNode } from "react";
import Spinner from "react-bootstrap/Spinner";
import { ModelSuccess } from "../sharedModels/modelSucces";

const useHTTPState = (isLoading: boolean, btnText: string | ReactNode) => {
  let btnContent: string | ReactNode = btnText;

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

export default useHTTPState;
