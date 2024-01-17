import { useFormikContext } from "formik";
import Form from "react-bootstrap/Form";
import { ModelDay } from "../../../sharedModels/modelDay";
import InputError from "../inputError/InputError";
import InputSearchIcon from "./InputSearchIcon";
import "./_inputSelect.scss";

type Props = {
  inputsData: {
    name: string;
    firstOption: string;
    label?: string;
    options: string[] | number[];
  }[];
  padding: string;
  inputIcon?: boolean;
};

const InputsSelect = (props: Props) => {
  const { errors, touched, handleBlur, setFieldValue } =
    useFormikContext<ModelDay>();

  return (
    <div className="position-relative">
      {props.inputIcon && <InputSearchIcon/>}
      {props.inputsData.map(({ name, firstOption, label, options }) => {
        return (
          <Form.Group key={name} className="mt-2  _inputSelect">
          
            <Form.Select
              id={name}
              name={name}
              onChange={e => setFieldValue(name, e.target.value)}
              onBlur={handleBlur}
              size="sm"
              className={` _fs-primary text-light-emphasis text-center border bg-secondary-light _cursor-pointer _inputSelect position-relative ${
                firstOption === "Brak danych" ? "text-warning" : ""
              } ${props.padding}`}
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
    </div>
  );
};

export default InputsSelect;
