import { Form, Formik } from "formik";
import useFormikFilterColumns from "./useFormikFilterColumns";
import EEE from "./EEE";
import useDataFilterColumns from "./useDataFilterColumns";
import InputsSelect from "../inputs/inputsSelect/InputsSelect";

const FilterColumns = () => {
  const { dataInputsSelect } = useDataFilterColumns();

  const { initialValues, onSubmit } = useFormikFilterColumns();

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className="py-2">
          <InputsSelect inputsData={dataInputsSelect} />
          <EEE />
        </Form>
      </Formik>
    </div>
  );
};

export default FilterColumns;
