import { useContext, useState } from "react";
import "./_inputsCover.scss";
import { LabelContext } from "../InputsText";

const InputsCover = () => {
  const [isPrinted, setPrinted] = useState(true);
  const { labelCover } = useContext(LabelContext);

  const handleDelete = () => {
    setPrinted(false);
  };

  if (!isPrinted) return null;

  return (
    <div
      onClick={handleDelete}
      className="_inputsCover w-100 p-2  bg-secondary-light _fs-primary text-light-emphasis  _radius border"
    >
      {labelCover}
    </div>
  );
};

export default InputsCover;
