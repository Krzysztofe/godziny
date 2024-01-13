import { Form, Formik } from "formik";
import useFormikSearch from "../useFormikSearch";
import EEE from "../EEE";
import useDataSearch from "../useDataSearch";
import InputsSelect from "../../../inputs/inputsSelect/InputsSelect";
import { useLocation } from "react-router-dom";
import "./_formSearchContext.scss"

const FormSearchContext = () => {
  const { dataInputsSelect } = useDataSearch();
  const { initialValues, onSubmit } = useFormikSearch();
  const { pathname } = useLocation();
  const printFilter = pathname.includes("202");

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form
        className={`_formSearchContext ms-3 m-md-auto ${
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

export default FormSearchContext;