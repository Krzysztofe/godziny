import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import TextInput from "../../../components/inputs/TextInput";
import { handleChange } from "../../../redux/storeFeatures/hoursPanelSlice";
import { useUpdateColumnsMutation } from "../../../services/apiSlice";
import { useParams } from "react-router-dom";
import useDataBaseValues from "../useDataBaseValues";
import { FcApproval } from "react-icons/fc";

const FormHeaderMonhPanel = () => {
  const { monthValue } = useParams();
  const dispatch = useDispatch();
  const { numberOfDays } = useSelector((state: RootState) => state.hoursPanel);
  const { databaseMonth, data } = useDataBaseValues(monthValue);
  const [updateColumns, succes] = useUpdateColumnsMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(handleChange(value));
  };

  const handleAddHours = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateColumns({
      id: data && databaseMonth?.id,
      columns: {
        ...databaseMonth,
        allHours: +numberOfDays,
      },
    });
  };

  let btnContent = <FcApproval />;

  if (succes.isLoading) {
    btnContent = <div> "Loading" </div>;
  }

  if (succes.isError) {
    btnContent = <div> "Błąd" </div>;
  }

  return (
    <form onSubmit={handleAddHours} style={{ display: "flex" }}>
      <TextInput
        type="number"
        name="numberOfDays"
        value={numberOfDays}
        label="Liczba godzin w miesiącu "
        placeholder=""
        handleChange={handleInputChange}
      />

      <button type="submit">{btnContent}</button>
    </form>
  );
};

export default FormHeaderMonhPanel;
