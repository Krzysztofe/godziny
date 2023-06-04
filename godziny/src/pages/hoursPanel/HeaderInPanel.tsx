import TextInput from "../../data/inputs/TextInput";
import { useState } from "react";

const HeaderInPanel = () => {
  const [numberOfDays, setNumberOfDays] = useState("");

  const handleChange = () => {
    return;
  };

  return (
    <header>
      <TextInput
        type="number"
        name="numberOfDays"
        value={numberOfDays}
        label="Liczba dni w miesiącu"
        placeholder="Dni"
        handleChange={handleChange}
      />
    </header>
  );
};

export default HeaderInPanel;
