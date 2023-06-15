import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import useLoginForm from "./useLoginForm";

const Login = () => {
  const { formik } = useLoginForm();


console.log("err", formik.errors);
console.log("to", formik.touched);

  return (
    <div style={{ textAlign: "center" }}>
      <Link to="/miesiac"> godziny</Link>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Godziny w miesiącu</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Hasło"
          />
          <Form.Text className="text-muted">
            {formik.errors.password && (
              <div className="error">{formik.errors.password}</div>
            )}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          zaloguj
        </Button>
      </Form>
     
    </div>
  );
};

export default Login;
