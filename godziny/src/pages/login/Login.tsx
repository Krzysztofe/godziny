import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import useLoginForm from "./useLoginForm";

const Login = () => {
  const { formik } = useLoginForm();

  return (
    <div style={{ textAlign: "center" }}>
      <Link to="/miesiac"> godziny</Link>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label htmlFor="password">Podaj hasło</Form.Label>
          <Form.Control
            id="password"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Hasło"
          />
          <Form.Text className="text-muted">
            {formik.touched.password && formik.errors.password && (
              <div className="error">{formik.errors.password}</div>
            )}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Zaloguj
        </Button>
      </Form>
    </div>
  );
};

export default Login;
