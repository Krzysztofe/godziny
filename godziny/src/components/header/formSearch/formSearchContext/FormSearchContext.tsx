import { Form, Formik } from "formik";
import useFormikSearch from "../useFormikSearch";
import EEE from "../EEE";
import useDataSearch from "../useDataSearch";
import InputsSelect from "../../../inputs/inputsSelect/InputsSelect";
import { useLocation } from "react-router-dom";
import "./_formSearchContext.scss";
import useInPathname from "../../../../hooks/useInPathname";

const FormSearchContext = () => {
  const { dataInputsSelect } = useDataSearch();
  const { initialValues, onSubmit } = useFormikSearch();
  const { inPathname } = useInPathname("202");

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form
        className={`_formSearchContext ${inPathname ? "visible" : "invisible"}`}
      >
        <div className="_formSearchContext__select ms-3 m-md-auto">
          <InputsSelect
            inputsData={dataInputsSelect}
            padding={"ps-4"}
            inputIcon={true}
          />
        </div>

        <EEE />
      </Form>
    </Formik>
  );
};

export default FormSearchContext;
