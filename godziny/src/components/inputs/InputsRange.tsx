import React from "react";
import Form from "react-bootstrap/Form";
import { useFormikContext } from "formik";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

type ModelFormValues = {
  allHours: number;
};

type Props = {
  inputsValues: string[];
};

const InputsRange = (props: Props) => {
  const { values, handleBlur, setFieldValue } =
    useFormikContext<ModelFormValues>();

  const { month } = useSelector((state: RootState) => state.monthsPanel);
  const submittedHours = month?.calc.submittedHours;
  const acceptedHours = month?.calc.acceptedHours;

  const gradientValue = values.allHours / 3.2;
  const gradientBackground: string = `linear-gradient(to right, rgba(180,120,255) ${gradientValue}%, rgba(180,180,255) ${gradientValue}%)`;

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
              className="form-range custom-range medium"
              style={{
                height: 10,
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
