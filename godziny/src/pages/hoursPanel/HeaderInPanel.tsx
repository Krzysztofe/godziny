
import TextInput from "../../components/inputs/TextInput";
import { useDispatch, useSelector } from "react-redux";
import {
  useColumnsQuery,
  useDeleteAllColumnsMutation
} from "../../services/apiSlice";
import { RootState } from "../../redux/store";
import { handleChange } from "../../redux/storeFeatures/hoursPanelSlice";
import useDataBaseValues from "./useDataBaseValues";

const HeaderInPanel = () => {
   const dispatch = useDispatch();
   const { numberOfDays } = useSelector((state: RootState) => state.hoursPanel);
  // const { data, error } = useColumnsQuery(undefined);

  const [deleteAllColumns, isLoading] = useDeleteAllColumnsMutation();

  

  const {
    dataBaseColumnsId,
    dataBaseAllHours,
    updatedColumnsWithAddedDays,
    databaseColumns,
    data,
    success,
    updateColumns,
    addDays,
  } = useDataBaseValues();

 const columnsIdFRomDatabase = data && Object.keys(data).join();


  const handleDelete = async () => {
    await deleteAllColumns(columnsIdFRomDatabase);
  };



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(handleChange(value));
  };

  const handleAddHours = async () => {

const columnsData = {
  allHours: numberOfDays,
  columns: updatedColumnsWithAddedDays,
};

      await updateColumns({
        id: dataBaseColumnsId,
        columns: columnsData,
      });
  };


  return (
    <header>
      <TextInput
        type="number"
        name="numberOfDays"
        value={numberOfDays}
        label="Godziny w miesiącu "
        placeholder="Dni"
        handleChange={handleInputChange}
      />
      <button onClick={handleAddHours}>Dodaj godziny</button>

      <button onClick={handleDelete}> usuń wszystko</button>
    </header>
  );
};

export default HeaderInPanel;
