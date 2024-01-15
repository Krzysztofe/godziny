import { useFormikContext } from "formik";
import Form from "react-bootstrap/Form";
import InputError from "../inputError/InputError";
import { ModelDay } from "../../../sharedModels/modelDay";
import "./_inputsText.scss";
import { useEffect, useRef } from "react";
import InputsTextCover from "./labelCover/InputsCover";
import InputsTextLabel from "./InputsTextLabel";

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
          label,
          labelCover,
          type,
          isErrorPrint,
          min,
          max,
          placeholder,
        }) => {
          return (
            <Form.Group key={value} className="mt-2 position-relative">
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
                className={`text-light-emphasis bg-secondary-light _radius shadow-sm w-100 text-capitalize _cursor-pointer _fs-primary
                ${type === "color" ? "_inputsColor p-0" : "py-2"}
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
