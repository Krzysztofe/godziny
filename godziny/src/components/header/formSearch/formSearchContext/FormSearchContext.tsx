import { Form, Formik } from "formik";
import { memo } from "react";
import InputsSelect from "../../../inputs/inputsSelect/InputsSelect";
import GetOnChangeValues from "../GetOnChangeValues";
import useDataSearch from "../useDataSearch";
import "./_formSearchContext.scss";

const FormSearchContext = memo(() => {

  const { dataInputsSelect } = useDataSearch();


  return (
    <Formik
      initialValues={{
        searchedName: "",
      }}
      onSubmit={() => {}}
    >
      <Form className={`_formSearchContext`}>
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
});

export default FormSearchContext;
