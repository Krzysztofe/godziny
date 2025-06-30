import Button from "react-bootstrap/Button";

type Props = {
  action: () => void;
};

const ButtonAlertDelete = (props: Props) => {


  return (
    <>
      <Button id="noButton" className="_radius bg-dark border-0 px-4 px-sm-5">
        Nie
      </Button>
      <Button
        onClick={props.action}
        className="_radius bg-primary border-0 px-4 px-sm-5 ms-4"
      >
        Tak
      </Button>
    </>
  );
};

export default ButtonAlertDelete;
