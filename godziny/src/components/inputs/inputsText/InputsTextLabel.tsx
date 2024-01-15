import Form from "react-bootstrap/Form";
import InputsCover from "./labelCover/InputsCover";

type Props = {
  value: string;
  labelCover?: string;
};

const InputsTextLabel = (props: Props) => {
  if (props.labelCover === undefined) return <></>;

  return (
    <Form.Label htmlFor={props.value} className="position-absolute w-100">
      <InputsCover text={props.labelCover} />
    </Form.Label>
  );
};

export default InputsTextLabel;
