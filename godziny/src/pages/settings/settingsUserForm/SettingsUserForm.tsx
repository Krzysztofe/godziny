import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import useHTTPState from "../../../hooks/useHTTPState";
import { dataUserInputs } from "./dataSettingsUserForm";
import useUserSettingsFormik from "./useSettingsUserFormik";
import { createBrowserHistory } from "history";

const SettingsUserForm = () => {
  const { formik, success } = useUserSettingsFormik();
  const { btnContent } = useHTTPState(success, "Zapisz użytkowanika");

  const history = createBrowserHistory();

  const handleGoBack = () => {
    history.back();
  };

  return (
    <Col className="col-9 col-sm-9 col-md-6 col-xl-3 col-xxl-3 me-md-auto">
      <button onClick={handleGoBack}>Wróć</button>
      <Form onSubmit={formik.handleSubmit}>
        <Row>
          {dataUserInputs.map(({ labelText, name, type, placeholder }, idx) => {
            return (
              <Col key={name} className={`${idx === 0 ? "col-8" : "col-4"}`}>
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
    </Col>
  );
};

export default SettingsUserForm;
