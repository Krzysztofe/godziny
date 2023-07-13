import React from "react";
import useUserSettingsFormik from "./useSettingsUserFormik";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { dataUserInputs } from "./dataSettingsUserForm";


const SettingsUserForm = () => {
  const { formik, success } = useUserSettingsFormik();

  // cl

  return (
    <Form onSubmit={formik.handleSubmit}>
      {dataUserInputs.map(({ labelText, name, type, placeholder }) => {
        return (
          <Form.Group key = {name} className="mx-auto">
            <div className="text-center fs-3 fw-medium mb-4">
              <Form.Label htmlFor={name} className="mb-0">
                {labelText}
              </Form.Label>
            </div>

            <Form.Control
              id={name}
              type={type}
              name={name}
              value={formik.values[name as keyof typeof formik.values]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder={placeholder}
              size="lg"
              className="shadow-sm"
            />

            <Form.Text
              className="text-danger d-block mt-0 fs-8"
              style={{ height: "0.7rem" }}
            >
              {formik.touched[name as keyof typeof formik.touched] &&
                formik.errors[name as keyof typeof formik.touched] &&
                formik.errors[name as keyof typeof formik.touched]}
            </Form.Text>
          </Form.Group>
        );
      })}

      <Button type="submit">kkkk</Button>
    </Form>
  );
};

export default SettingsUserForm;
