import { Form, Formik } from "formik";
import { memo } from "react";
import InputsSelect from "../../../inputs/inputsSelect/InputsSelect";
import GetOnChangeValues from "../GetOnChangeValues";
import useDataSearch from "../useDataSearch";
import "./_formSearchContext.scss";
import { useUsersQuery } from "../../../../services/apiSliceUsers";

const FormSearchContext = memo(() => {
  useUsersQuery();

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
