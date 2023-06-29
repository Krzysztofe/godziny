import { useState } from "react";


const IndexSettings = () => {
  const [color, setColor] = useState("#ffffff");

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };


  return (
    <div>
      <h6>ustawienia</h6>
      <div>
        <input type="color" value={color} onChange={handleChange} />
        <div
          style={{ backgroundColor: color, width: "100px", height: "100px" }}
        ></div>
      </div>
    </div>
  );
};

export default IndexSettings;
