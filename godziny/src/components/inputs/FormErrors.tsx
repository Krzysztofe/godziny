import { FormikTouched, FormikErrors } from "formik";
import { ModelDay } from "../sidebar/someData/dataSidebarMonthForm";

type Props = {
  value: string;
  errors: FormikErrors<ModelDay>;
  touched: FormikTouched<ModelDay>;
};

const FormErrors = (props: Props) => {
  return (
    <div className="text-danger d-block mt-0 fs-8" style={{ height: "0.7rem" }}>
      {props.touched[props.value as keyof typeof props.touched] &&
        props.errors[props.value as keyof typeof props.touched] &&
        props.errors[props.value as keyof typeof props.touched]}
    </div>
  );
};

export default FormErrors;
