import TextInput from "../../components/inputs/TextInput";
import { useDispatch, useSelector } from "react-redux";
import {
  useAddDaysMutation,
  useColumnsQuery,
  useDeleteAllColumnsMutation,
  useUpdateColumnsMutation,
} from "../../services/apiSlice";
import { RootState } from "../../redux/store";
import { handleChange } from "../../redux/storeFeatures/hoursPanelSlice";
import useDataBaseValues from "./useDataBaseValues";
import { FcApproval } from "react-icons/fc";

const HeaderInPanel = () => {
  const dispatch = useDispatch();
  const { numberOfDays } = useSelector((state: RootState) => state.hoursPanel);

  const [deleteAllColumns, isLoading] = useDeleteAllColumnsMutation();
  const [updateColumns, succes] = useUpdateColumnsMutation();

  const {
    databaseColumnsId,
    databaseAllHours,
    dataBaseSubmitedHours,
    submitedHoursSum,
    databaseAccepteddHours,
    databaseRejectedHours,
    updatedColumnsWithAddedDays,
    databaseColumns,
    rejectedHoursSum,
    acceptedHoursSum,
    data,
    dataCurrentHours,
  } = useDataBaseValues();

  const columnsIdFRomDatabase = data && Object.keys(data).join();

  const handleDelete = async () => {
    await deleteAllColumns(columnsIdFRomDatabase);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(handleChange(value));
  };

  let btnContent = <FcApproval />;

  if (succes.isLoading) {
    btnContent = <div> "Loading" </div>;
  }

  
  if (succes.isError) {
    btnContent = <div> "Błąd" </div>;
  }

  // console.log("head", succes.isError);

  const handleAddHours = async () => {
    await updateColumns({
      id: databaseColumnsId,
      columns: {
        allHours: +numberOfDays,
        currentHours:
          +numberOfDays -
          submitedHoursSum -
          acceptedHoursSum -
          rejectedHoursSum +
          rejectedHoursSum,
        submitedHours: dataBaseSubmitedHours,
        acceptedHours: databaseAccepteddHours,
        rejectedHpurs: databaseRejectedHours,
        columns: updatedColumnsWithAddedDays,
      },
    });
  };

  return (
    <header>
      <div style={{ display: "flex" }}>
        <TextInput
          type="number"
          name="numberOfDays"
          value={numberOfDays}
          label="Podaj liczbę godzin w miesiącu "
          placeholder=""
          handleChange={handleInputChange}
        />

        <button onClick={handleAddHours}>
          {btnContent}
        </button>
      </div>

      <button onClick={handleDelete}> usuń wszystko</button>
      <p>Godziny w miesiącu: {databaseAllHours} </p>
      <p>Godziny do wykorzystania: {dataCurrentHours} </p>
    </header>
  );
};

export default HeaderInPanel;
