import TextInput from "../../data/inputs/TextInput";
import { useDispatch, useSelector } from "react-redux";
import { handleChange } from "../../redux/storeFeatures/hoursPanelSlice";
import { RootState } from "../../redux/store";
import { useAddReactionMutation } from "../../services/apiSlice";
import { createDaysInColumn } from "./utils";
import { columnsWithDays } from "./dataHoursPanel";

const HeaderInPanel = () => {
  const dispatch = useDispatch();
  const { numberOfDays } = useSelector((state: RootState) => state.hoursPanel);

  const [addReaction, success] = useAddReactionMutation();

  columnsWithDays[0].items = createDaysInColumn(numberOfDays);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(handleChange(value));
  };

  const handleClick = async () => {
    await addReaction(columnsWithDays);
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
