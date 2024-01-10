import { useFormikContext } from "formik";
import Form from "react-bootstrap/Form";
import InputError from "../inputError/InputError";
import { ModelDay } from "../../../sharedModels/modelDay";
import "./_inputsText.scss";

type Props = {
  inputsData: {
    value: string;
    type: string;
    label?: string;
    placeholder?: string;
    isErrorPrint?: boolean;
    min?: string;
    max?: string;
  }[];
};

const InputsText = (props: Props) => {
  const { values, handleBlur, setFieldValue, errors, touched } =
    useFormikContext<ModelDay>();

  return (
    <>
      {props.inputsData.map(
        ({ value, label, type, isErrorPrint, min, max, placeholder }) => {
          return (
            <Form.Group key={value}>
              {label && (
                <Form.Label
                  htmlFor="date"
                  className="mb-0 _fs-responsive fw-medium"
                >
                  {label}
                </Form.Label>
              )}
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
                className={`p-0 border border-primary shadow-sm w-100 text-capitalize _inputsText _cursor-pointer ${
                  type === "color" ? "px-0" : "px-1"
                }`}
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
