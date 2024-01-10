import { FormikTouched, FormikErrors } from "formik";
import { ModelDay } from "../../../sharedModels/modelDay";
import "./_inputError.scss"

type Props = {
  value: string;
  errors: FormikErrors<ModelDay>;
  touched: FormikTouched<ModelDay>;
};

const InputError = (props: Props) => {
  return (
    <div className="text-danger d-block mt-0 _fs-5 _inputError">
      {props.touched[props.value as keyof typeof props.touched] &&
        props.errors[props.value as keyof typeof props.touched] &&
        props.errors[props.value as keyof typeof props.touched]}
    </div>
  );
};

export default InputError;
