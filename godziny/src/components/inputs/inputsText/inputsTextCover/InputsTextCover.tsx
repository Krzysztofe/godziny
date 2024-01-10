import { useState } from "react";
import "./_inputsTextCover.scss";

type Props = {
  text: string;
};

const InputsTextCover = (props: Props) => {
  const [isPrinted, setPrinted] = useState(true);

  const handleDelete = () => {
    setPrinted(false);
  };

  return (
    <>
      {isPrinted && (
        <div
          onClick={handleDelete}
          className="_inputsTextCover w-100 ps-2 _fs-3 d-flex align-items-center bg-secondary text-light-emphasis _radius border position-absolute"
        >
          {props.text}
        </div>
      )}
    </>
  );
};

export default InputsTextCover;
