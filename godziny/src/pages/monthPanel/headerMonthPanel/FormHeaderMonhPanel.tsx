import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import TextInput from "../../../components/inputs/TextInput";
import { handleChange } from "../../../redux/storeFeatures/hoursPanelSlice";
import { useUpdateColumnsMutation } from "../../../services/apiSlice";
import { useParams } from "react-router-dom";
import useDataBaseValues from "../useDataBaseValues";
import { FcApproval } from "react-icons/fc";
import { Form, Button } from "react-bootstrap";

const FormHeaderMonhPanel = () => {
  const { monthURL } = useParams();
  const dispatch = useDispatch();
  const { numberOfDays } = useSelector((state: RootState) => state.hoursPanel);
  const { databaseMonth, data } = useDataBaseValues(monthURL);
  const [updateColumns, success] = useUpdateColumnsMutation();

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

  if (success.isLoading) {
    btnContent = <div> "Loading" </div>;
  }

  if (success.isError) {
    btnContent = <div> "Błąd" </div>;
  }

  return (
    <Form>
      {/* <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Godziny w miesiącu</Form.Label>
        <Form.Control type="number" placeholder="Liczba" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        {btnContent}
      </Button> */}

      <form onSubmit={handleAddHours} style={{ display: "flex" }}>
        <TextInput
          type="number"
          name="numberOfDays"
          value={numberOfDays}
          label="Godziny w miesiącu "
          placeholder="Liczba"
          handleChange={handleInputChange}
        />

        <button type="submit">{btnContent}</button>
      </form>
    </Form>
  );
};

export default FormHeaderMonhPanel;
