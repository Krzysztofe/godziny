import { Form, Formik } from "formik";
import ButtonForm from "../../buttonForm/ButtonForm";
import InputsText from "../../inputs/inputsText/InputsText";
import Toast from "../../toast/Toast";
import useFormikUser from "./useFormikUser";

export const dataInputsText = [
  {
    value: "userColor",
    type: "color",
    labelCover: "Kolor",
    isErrorPrint: true,
  },
  {
    value: "userName",
    type: "text",
    isErrorPrint: true,
    placeholder: "Imię",
  },
];

const FormUserContext = () => {
  const { initialValues, validation, onSubmit, success, error } =
    useFormikUser();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validation}
      onSubmit={onSubmit}
    >
      <>
        <Form className="position-relative _formInCollapse">
          <div className="position-relative">
            <InputsText inputsData={dataInputsText} />
          </div>

          <div className="position-relative">
            <Toast isSuccess={success.isSuccess} />
            <ButtonForm isLoading={success.isLoading} />
          </div>
          {error && (
            <div className="text-danger position-absolute d-block mt-0 fs-5 ps-2">
              Błąd zapisu. Ponów próbę
            </div>
          )}
        </Form>
      </>
    </Formik>
  );
};

export default FormUserContext;
