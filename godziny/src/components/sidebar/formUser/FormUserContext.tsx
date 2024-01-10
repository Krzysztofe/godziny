import { Form, Formik } from "formik";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserSuccess } from "../../../redux/storeFeatures/requestSuccessSlice";
import ButtonForm from "../../ButtonForm";
import InputsText from "../../inputs/inputsText/InputsText";
import { dataInputs } from "./dataFormUser";
import useFormikUser from "./useFormikUser";
import InputsTextCover from "../../inputs/inputsText/inputsTextCover/InputsTextCover";

const FormUserContext = () => {
  const dispatch = useDispatch();
  const { initialValues, validation, onSubmit, success } = useFormikUser();

  useEffect(() => {
    dispatch(getUserSuccess(success.isSuccess));
  }, [success.isSuccess]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validation}
      onSubmit={onSubmit}
    >
      <Form className="py-2">
        <div className="position-relative">
          <InputsText inputsData={dataInputs} />
          <InputsTextCover text={"Kolor"} />
        </div>

        <ButtonForm success={success} />
      </Form>
    </Formik>
  );
};

export default FormUserContext;
