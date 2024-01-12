import { Form, Formik } from "formik";
import useFormikFilterColumns from "./useFormikFilterColumns";
import EEE from "./EEE";
import useDataFilterColumns from "./useDataFilterColumns";
import InputsSelect from "../../inputs/inputsSelect/InputsSelect";
import { useLocation } from "react-router-dom";

const FilterColumns = () => {
  const { dataInputsSelect } = useDataFilterColumns();
  const { initialValues, onSubmit } = useFormikFilterColumns();
  const { pathname } = useLocation();
  const printFilter = pathname.includes("202");

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form
        className={`w-25 ms-2 m-md-auto ${
          printFilter ? "visible" : "invisible"
        }`}
      >
        <InputsSelect
          inputsData={dataInputsSelect}
          padding={"ps-4"}
          inputIcon={true}
        />
        <EEE />
      </Form>
    </Formik>
  );
};

export default FilterColumns;
