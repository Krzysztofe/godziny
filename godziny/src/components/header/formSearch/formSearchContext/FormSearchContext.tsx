import { Form, Formik } from "formik";
import { memo } from "react";
import useFirebaseConfig from "../../../../hooks/useFirebaseConfig";
import useIsPath from "../../../../hooks/useIsPath";
import InputsSelect from "../../../inputs/inputsSelect/InputsSelect";
import GetOnChangeValues from "../GetOnChangeValues";
import useDataSearch from "../useDataSearch";
import "./_formSearchContext.scss";

const FormSearchContext = memo(() => {
  const { user } = useFirebaseConfig();
  const { dataInputsSelect } = useDataSearch();
  const { isPath } = useIsPath(["202"]);

  if (!user || !isPath) return null;

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
