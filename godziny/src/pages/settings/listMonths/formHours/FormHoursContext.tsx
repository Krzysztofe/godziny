import { Form, Formik } from "formik";
import ButtonForm from "../../../../components/buttonForm/ButtonForm";
import InputsRange from "../../../../components/inputs/inputsRange/InputsRange";
import FormHoursError from "./FormHoursError";
import FormHoursTop from "./formHoursTop/FormHoursTop";
import useFormikHours from "./useFormikHours";

const FormHoursContext = () => {


  const { initialValues, onSubmit, success } = useFormikHours();

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className="py-2 pe-2">
        <FormHoursTop />
        <InputsRange inputsValues={["allHours"]} />
        <div className="_d-between align-items-center mt-2 ">
          <div className="mt-2">
            <FormHoursError />
          </div>
          <ButtonForm isLoading={success.isLoading} />
        </div>
      </Form>
    </Formik>
  );
};

export default FormHoursContext;
