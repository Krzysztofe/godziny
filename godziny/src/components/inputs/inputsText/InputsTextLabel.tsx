import Form from "react-bootstrap/Form";
import InputsCover from "./labelCover/InputsCover";
import { useContext } from "react";
import { LabelContext } from "./InputsText";


const InputsTextLabel = () => {
  const { value } = useContext(LabelContext);

  return (
    <Form.Label htmlFor={value} className="position-absolute w-100">
      <InputsCover />
    </Form.Label>
  );
};

export default InputsTextLabel;
