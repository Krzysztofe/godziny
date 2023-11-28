import { useFormikContext } from "formik";
import Form from "react-bootstrap/Form";
import {
  dateInNext14Days,
  dateInNext60Days,
} from "../../data/dataCurrentDates";
import { ModelDay } from "../sidebar/sidebarMonthForm/dataSidebarMonthForm";
import FormErrors from "./FormErrors";

type Props = {
  inputsData: {
    value: string;
    type: string;
    label: string;
  }[];
};

const InputsText = (props: Props) => {
  const { values, handleBlur, setFieldValue, errors, touched } =
    useFormikContext<ModelDay>();

  return (
    <>
      {props.inputsData.map(({ value, label }) => {
        return (
          <Form.Group key={label}>
            <Form.Label htmlFor="date" className="mb-0 fs-6 fw-medium">
              {label}
            </Form.Label>
            <Form.Control
              id="date"
              type="date"
              name="date"
              value={values[value as keyof typeof values]}
              onChange={e => setFieldValue(value, e.target.value)}
              onBlur={handleBlur}
              min={dateInNext14Days}
              max={dateInNext60Days}
              size="sm"
              className="p-0 px-1 border border-primary shadow-sm"
              style={{ minHeight: 0, cursor: "pointer" }}
            />
            <FormErrors value={value} errors={errors} touched={touched} />
          </Form.Group>
        );
      })}
    </>
  );
};

export default InputsText;
