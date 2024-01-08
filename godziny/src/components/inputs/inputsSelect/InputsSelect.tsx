import { useFormikContext } from "formik";
import Form from "react-bootstrap/Form";
import InputError from "../inputError/InputError";
import { ModelDay } from "../../../sharedModels/modelDay";


type Props = {
  inputsData: {
    name: string;
    firstOption: string;
    label?: string;
    options: string[] | number[];
  }[];
};

const InputsSelect = (props: Props) => {
  const { errors, touched, handleBlur, setFieldValue } =
    useFormikContext<ModelDay>();

  return (
    <>
      {props.inputsData.map(({ name, firstOption, label, options }) => {
        return (
          <Form.Group key={label}>
            <Form.Label
              htmlFor={name}
              className="mb-0 fw-medium  _fs-responsive"
            >
              {label}
            </Form.Label>

            <Form.Select
              id={name}
              name={name}
              onChange={e => setFieldValue(name, e.target.value)}
              onBlur={handleBlur}
              size="sm"
              className={`p-0 px-1 border border-primary shadow-sm _cursor-pointer ${
                firstOption === "Brak danych" ? "text-warning" : ""
              }`}
            >
              <option
                value={firstOption}
                className={` ${
                  firstOption === "Brak danych"
                    ? "text-warning"
                    : "text-placeholder"
                }`}
              >
                {firstOption}
              </option>

              {options?.map((option: string | number) => {
                return (
                  <option key={option} value={option}>
                    {option}
                  </option>
                );
              })}
            </Form.Select>
            <InputError value={name} errors={errors} touched={touched} />
          </Form.Group>
        );
      })}
    </>
  );
};

export default InputsSelect;
