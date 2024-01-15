import Button from "react-bootstrap/Button";
import { ModelSuccess } from "../../sharedModels/modelSucces";
import "./_buttonForm.scss";
import useHTTPState from "../../hooks/useHTTPState";
import "./_buttonForm.scss"

type Props = {
  success: ModelSuccess;
};

const ButtonForm = (props: Props) => {
  const { btnContent } = useHTTPState(
    props.success,
<div className="m-auto">Zapisz</div>
  );



  return (
    <Button
      type="submit"
      variant="primary"
      disabled={props.success.isLoading}
      className="d-flex p-0 py-1 m-0 ms-auto _radius w-50 _fw-semiBold _fs-primary _buttonForm"
    >
      {btnContent}
    </Button>
  );
};

export default ButtonForm;
