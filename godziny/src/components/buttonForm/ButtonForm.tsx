import Button from "react-bootstrap/Button";
import { ModelSuccess } from "../../sharedModels/modelSucces";
import "./_buttonForm.scss";
import useHTTPState from "../../hooks/useHTTPState";
import "./_buttonForm.scss";

type Props = {
  success: ModelSuccess;
};

const ButtonForm = (props: Props) => {
  const { btnContent } = useHTTPState(props.success, <div>Zapisz</div>);

  return (
    <Button
      type="submit"
      variant="primary"
      disabled={props.success.isLoading}
      className="_d-center p-0 py-1 mt-2 ms-auto _radius w-50 _fw-semiBold _fs-primary _buttonForm position-relative"
    >
      <div className="invisible">Z</div>
      <div className="_buttonForm__content">{btnContent}</div>
    </Button>
  );
};

export default ButtonForm;
