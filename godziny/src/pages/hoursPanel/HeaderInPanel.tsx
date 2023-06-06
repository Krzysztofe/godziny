import TextInput from "../../data/inputs/TextInput";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleChange } from "../../redux/storeFeatures/hoursPanelSlice";
import { RootState } from "../../redux/store";
import { useAddReactionMutation } from "../../services/apiSlice";
import { createDaysInColumn } from "./utils";
import { send } from "./dataHoursPanel";

const HeaderInPanel = () => {
  const dispatch = useDispatch();
  const { numberOfDays } = useSelector((state: RootState) => state.hoursPanel);

  const [addReaction, success] = useAddReactionMutation();

  send[0].items = createDaysInColumn(numberOfDays);


// const send = [
//   {
//     id: "miesiac",
//     name: "miesiac",
//     items: createDaysInColumn(numberOfDays),
//   },
//   {
//     id: "oczekujące",
//     name: "oczekujące",
//     items: [{}],
//   },
//   {
//     id: "zatwierdzone",
//     name: "zatwierdzone",
//     items: [{}],
//   },
// ];



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(handleChange(value));
  };

  const handleClick = async () => {
    await addReaction(send);
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
      <button onClick={handleClick}> add</button>
    </header>
  );
};

export default HeaderInPanel;
