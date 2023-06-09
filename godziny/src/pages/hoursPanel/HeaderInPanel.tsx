import {
  useColumnsQuery,
  useDeleteAllColumnsMutation
} from "../../services/apiSlice";

const HeaderInPanel = () => {
  const { data, error } = useColumnsQuery(undefined);

  const [deleteAllColumns, isLoading] = useDeleteAllColumnsMutation();

  const columnsIdFRomDatabase = data && Object.keys(data).join();

  const handleDelete = async () => {
    await deleteAllColumns(columnsIdFRomDatabase);
  };

  return (
    <header>
      <button onClick={handleDelete}> usuń wszystko</button>
    </header>
  );
};

export default HeaderInPanel;
