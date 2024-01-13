import { Form, Formik } from "formik";
import InputsSelect from "../inputs/inputsSelect/InputsSelect";
import { useLocation } from "react-router-dom";
import useDataFilterColumns from "../header/formSearch/useDataSearch";
import EEE from "../header/formSearch/EEE";
import useFormikFilterColumns from "../header/formSearch/useFormikSearch";

const FilterColumns = () => {
  const { dataInputsSelect } = useDataFilterColumns();
  const { initialValues, onSubmit } = useFormikFilterColumns();
  const { pathname } = useLocation();
  const printFilter = pathname.includes("202");

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form
        className={`w-25 ms-3 m-md-auto ${
          printFilter ? "visible" : "invisible"
        }`}
      >
        <InputsSelect inputsData={dataInputsSelect} padding={"ps-2"} />
        <EEE />
      </Form>
    </Formik>
  );
};

export default FilterColumns;
