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
    options: string[] | number[];
    isErrorPrint?: boolean;
  }[];
  padding: string;
  inputIcon?: boolean;
};

const InputsSelect = (props: Props) => {
  const { errors, touched, handleBlur, setFieldValue } =
    useFormikContext<any>();

  const isFirstOption = (firstOption: string) =>
    firstOption === "Brak danych" ? "text-warning" : "text-light-emphasis ";

  return (
    <div className="position-relative">
      {props.inputIcon && <InputSearchIcon />}
      {props.inputsData.map(({ name, firstOption, isErrorPrint, options }) => {
        return (
          <Form.Group key={name} className="mt-2 _inputSelect">
            <Form.Select
              id={name}
              name={name}
              onChange={e => setFieldValue(name, e.target.value)}
              onBlur={handleBlur}
              size="sm"
              className={` _fs-primary border bg-secondary-light _cursor-pointer _inputSelect position-relative  ${isFirstOption(
                firstOption
              )} ${props.padding}`}
            >
              <option value={firstOption}>{firstOption}</option>
              {options?.map((option: string | number) => {
                return (
                  <option key={option} value={option}>
                    {option}
                  </option>
                );
              })}
            </Form.Select>
            {isErrorPrint && (
              <InputError value={name} errors={errors} touched={touched} />
            )}
          </Form.Group>
        );
      })}
    </div>
  );
};

export default InputsSelect;
