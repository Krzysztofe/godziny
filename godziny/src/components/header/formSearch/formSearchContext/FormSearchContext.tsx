import { Form, Formik } from "formik";
import useInPathname from "../../../../hooks/useIsPathname";
import InputsSelect from "../../../inputs/inputsSelect/InputsSelect";
import GetOnChangeValues from "../GetOnChangeValues";
import useDataSearch from "../useDataSearch";
import useFormikSearch from "../useFormikSearch";
import "./_formSearchContext.scss";

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
            padding={"ps-4 text-start"}
            inputIcon={true}
          />
        </div>
        <GetOnChangeValues />
      </Form>
    </Formik>
  );
};

export default FormSearchContext;
