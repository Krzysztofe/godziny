import Button from "react-bootstrap/Button";
import useHTTPState from "../hooks/useHTTPState";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { ModelSuccess } from "../sharedModels/modelSucces";

type Props = {
  success: ModelSuccess;
};

const ButtonForm = (props: Props) => {
  const { btnContent } = useHTTPState(
    props.success,
    <AiOutlinePlusCircle
      className="text-primary"
      style={{ fontSize: "1.4rem" }}
    />
  );

  return (
    <Button
      type="submit"
      disabled={props.success.isLoading}
      className="d-flex p-0 m-0 ms-auto text-info-emphasis border-0 bg-transparent"
    >
      {btnContent}
    </Button>
  );
};

export default ButtonForm;
