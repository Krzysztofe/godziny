import React from "react";
import { useFormikContext, Formik, Form as FormFormik, Field } from "formik";
import { ModelDay } from "../someData/dataSidebarMonthForm";
import useDataSidebarSelects from "../formDay/useDataFormDay";
import Form from "react-bootstrap/Form";
import FormErrors from "./FormErrors";

type Props = {
  inputsData: {
    name: string;
    firstOption: string;
    label: string;
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
            <Form.Label htmlFor={name} className="mb-0 fs-6 fw-medium">
              {label}
            </Form.Label>

            <Form.Select
              id={name}
              name={name}
              onChange={e => setFieldValue(name, e.target.value)}
              onBlur={handleBlur}
              size="sm"
              className={`p-0 px-1 border border-primary shadow-sm text-capitalize ${
                firstOption === "Brak danych" ? "text-warning" : ""
              }`}
              style={{
                cursor: "pointer",
              }}
            >
              <option>{firstOption}</option>

              {options?.map((option: string | number) => {
                return (
                  <option key={option} value={option}>
                    {option}
                  </option>
                );
              })}
            </Form.Select>
            <FormErrors value={name} errors={errors} touched={touched} />
          </Form.Group>
        );
      })}
    </>
  );
};

export default InputsSelect;
