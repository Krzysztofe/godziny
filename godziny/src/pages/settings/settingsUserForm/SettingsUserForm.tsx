import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import useHTTPState from "../../../hooks/useHTTPState";
import { dataUserInputs } from "./dataSettingsUserForm";
import useUserSettingsFormik from "./useSettingsUserFormik";
import { createBrowserHistory } from "history";
import SettingsReturnButton from "../SettingsReturnButton";

const SettingsUserForm = () => {
  const { formik, success } = useUserSettingsFormik();
  const { btnContent } = useHTTPState(success, "Dodaj użytkowanika");

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Row>
        {dataUserInputs.map(({ labelText, name, type, placeholder }, idx) => {
          return (
            <Col key={name} className={`${idx === 0 ? "col-7" : "col-5"}`}>
              <Form.Group className="">
                <Form.Label htmlFor={name} className="fw-medium">
                  {labelText}
                </Form.Label>

                <Form.Control
                  id={name}
                  type={type}
                  name={name}
                  value={formik.values[name as keyof typeof formik.values]}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder={placeholder}
                  className="shadow-sm"
                />

                <Form.Text
                  className="text-danger d-block mt-0 mb-4 fs-8"
                  style={{ height: "0.7rem" }}
                >
                  {formik.touched[name as keyof typeof formik.touched] &&
                    formik.errors[name as keyof typeof formik.touched] &&
                    formik.errors[name as keyof typeof formik.touched]}
                </Form.Text>
              </Form.Group>
            </Col>
          );
        })}
      </Row>

      <Button
        disabled={success.isLoading}
        type="submit"
        className="col-8 col-sm-7  bg-info text-white fw-medium"
      >
        {btnContent}
      </Button>
    </Form>
  );
};

export default SettingsUserForm;
