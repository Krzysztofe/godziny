import { useFormikContext } from "formik";
import Form from "react-bootstrap/Form";
import { ModelDay } from "../../../sharedModels/modelDay";
import InputError from "../inputError/InputError";
import InputsTextLabel from "./InputsTextLabel";
import "./_inputsText.scss";

type Props = {
  inputsData: {
    value: string;
    type: string;
    label?: string;
    labelCover?: string;
    placeholder?: string;
    isErrorPrint?: boolean;
    min?: string;
    max?: string;
    styles?: string;
  }[];
};

const InputsText = (props: Props) => {
  const { values, handleBlur, setFieldValue, errors, touched } =
    useFormikContext<ModelDay>();

  return (
    <>
      {props.inputsData.map(
        ({
          value,
          labelCover,
          type,
          isErrorPrint,
          min,
          max,
          placeholder,
          styles,
        }) => {
          return (
            <Form.Group key={value} className=" mt-2 position-relative">
              <InputsTextLabel value={value} labelCover={labelCover} />
              <Form.Control
                id={value}
                type={type}
                name={value}
                value={values[value as keyof typeof values]}
                onChange={e => setFieldValue(value, e.target.value)}
                onBlur={handleBlur}
                min={min}
                max={max}
                placeholder={placeholder}
                size="sm"
                className={`text-light-emphasis bg-secondary-light _radius w-100 text-capitalize _cursor-pointer _fs-primary text-center 
                   ${type === "color" ? "_inputsColor p-0" : "py-2"} ${styles}
                `}
              />

              {isErrorPrint && (
                <InputError value={value} errors={errors} touched={touched} />
              )}
            </Form.Group>
          );
        }
      )}
    </>
  );
};

export default InputsText;
