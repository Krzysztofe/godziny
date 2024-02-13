import Button from "react-bootstrap/Button";
import "./_buttonForm.scss";
import useBtnContent from "../../hooks/useBtnContent";
import "./_buttonForm.scss";


type Props = {
  isLoading: boolean;
  text?: string;
  styles?: string;
};

const ButtonForm = (props: Props) => {
  const buttonText = props.text ? <div>{props.text}</div> : <div>Zapisz</div>;
  const { btnContent } = useBtnContent(props?.isLoading, buttonText);

  return (
    <Button
      type="submit"
      variant="primary"
      disabled={props?.isLoading}
      className={`_d-center w-50 p-0 py-1 mt-2 ms-auto _radius  _fw-semiBold _fs-primary _buttonForm position-relative ${props.styles}`}
    >
      <div className="invisible">Z</div>
      <div className="_buttonForm__content _d-center">{btnContent}</div>
    </Button>
  );
};

export default ButtonForm;
