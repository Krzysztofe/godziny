import TextInput from "../../components/inputs/TextInput";
import { useDispatch, useSelector } from "react-redux";
import { handleChange } from "../../redux/storeFeatures/hoursPanelSlice";
import { RootState } from "../../redux/store";
import {
  useAddDaysMutation,
  useColumnsQuery,
  useUpdateColumnsMutation,
  useDeleteAllColumnsMutation,
} from "../../services/apiSlice";
import { addDaysToEmptyColumns, createDaysInColumn } from "./utils";
import { columnsWithDays } from "./dataHoursPanel";

const HeaderInPanel = () => {
  const dispatch = useDispatch();
  const { numberOfDays } = useSelector((state: RootState) => state.hoursPanel);

  const { data, error } = useColumnsQuery(undefined);
  const [addDays, success] = useAddDaysMutation();
  const [updateColumns] = useUpdateColumnsMutation();
  const [deleteAllColumns, isLoading] = useDeleteAllColumnsMutation();

  columnsWithDays[0].days = createDaysInColumn(numberOfDays);
  const addedDays = createDaysInColumn(numberOfDays);

  const columnsIdFRomDatabase = data && Object.keys(data).join();
  const columnsFromDatabase = data ? Object.values(data).flat() : [];
  const columnsToPrint = addDaysToEmptyColumns(columnsFromDatabase);

  const updatedCoumns = data ? [...columnsToPrint] : [];

  updatedCoumns[0] = data &&
    columnsFromDatabase?.length > 0 && {
      ...columnsToPrint?.[0],
      days: [...columnsToPrint?.[0]?.days, ...addedDays],
    };


// console.log("", columnsToPrint[0]?.days && columnsToPrint[0].days);
// console.log("", columnsToPrint[1]?.days && columnsToPrint[1].days);
// console.log("", columnsToPrint[2]?.days && columnsToPrint[2].days);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(handleChange(value));
  };

  const handleAddDays = async () => {
    data === null
      ? await addDays(columnsWithDays)
      : await updateColumns({
          id: columnsIdFRomDatabase,
          columns: updatedCoumns,
        });
  };

  const handleDelete = async () => {
    await deleteAllColumns(columnsIdFRomDatabase);
  };

// console.log('',data)

  return (
    <header>
      <TextInput
        type="number"
        name="numberOfDays"
        value={numberOfDays}
        label="Ilość planowanych dni "
        placeholder="Dni"
        handleChange={handleInputChange}
      />
      <button onClick={handleAddDays}>Dodaj dni</button>
      <button onClick={handleDelete}> usuń wszystko</button>
    </header>
  );
};

export default HeaderInPanel;
