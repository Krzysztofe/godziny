import Button from "react-bootstrap/Button";

type Props = {
  action: () => void;
};

const ButtonAlertAccept = (props: Props) => {


  return (
    <Button
      id="noButton"
      className="_radius bg-primary border-0 px-5 ms-4"
      onClick={props.action}
    >
      Ok
    </Button>
  );
};

export default ButtonAlertAccept;
