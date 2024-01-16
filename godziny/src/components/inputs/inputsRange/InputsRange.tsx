import { useFormikContext } from "formik";
import Form from "react-bootstrap/Form";
import "./_inputsRange..scss";

type ModelFormValues = {
  allHours: number;
};

type Props = {
  inputsValues: string[];
};

const InputsRange = (props: Props) => {
  const { values, handleBlur, setFieldValue } =
    useFormikContext<ModelFormValues>();

  const gradientValue = values.allHours / 3.2;
  const gradientBackground: string = `linear-gradient(to right,  rgb(110, 110, 110)${gradientValue}%, rgb(239, 239, 239) ${gradientValue}%)`;

  return (
    <>
      {props.inputsValues.map(value => {
        return (
          <Form.Group
            key={value}
            className="mt-2 d-flex align-items-center w-100"
          >
            <Form.Range
              name={value}
              min={0}
              max={320}
              value={values[value as keyof typeof values]}
              onChange={e => setFieldValue(value, e.target.value)}
              onBlur={handleBlur}
              className="form-range _inputsRange medium position-relative"
              style={{
                background: gradientBackground,
              }}
            />
          </Form.Group>
        );
      })}
    </>
  );
};

export default InputsRange;
