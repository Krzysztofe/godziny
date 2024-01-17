import { useState } from "react";
import "./_inputsCover.scss";

type Props = {
  text?: string;
};

const InputsCover = (props: Props) => {
  const [isPrinted, setPrinted] = useState(true);

  const handleDelete = () => {
    setPrinted(false);
  };

  return (
    <>
      {isPrinted && (
        <div
          onClick={handleDelete}
          className="_inputsCover w-100 _d-center  bg-secondary-light _fs-primary text-light-emphasis  _radius border"
        >
          {props.text}
        </div>
      )}
    </>
  );
};

export default InputsCover;
