import TextInput from "../../data/inputs/TextInput";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleChange } from "../../redux/storeFeatures/hoursPanelSlice";
import { RootState } from "../../redux/store";

const HeaderInPanel = () => {
  const dispatch = useDispatch();
  const { numberOfDays } = useSelector((state: RootState) => state.hoursPanel);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(handleChange(value));
  };

  return (
    <header>
      <TextInput
        type="number"
        name="numberOfDays"
        value={numberOfDays}
        label="Liczba dni w miesiącu"
        placeholder="Dni"
        handleChange={handleInputChange}
      />
    </header>
  );
};

export default HeaderInPanel;
