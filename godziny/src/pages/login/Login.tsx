import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { auth } from "../../data/firebaseConfig";
import useLoginForm from "./useLoginForm";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { formik, error } = useLoginForm();
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      user && navigate("/miesiac/2023-06");
    });
  }, []);

  

  return (
    <div style={{ textAlign: "center" }}>
     
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
        <p>{error}</p>
        <Button variant="primary" type="submit">
          Zaloguj
        </Button>
      </Form>
    </div>
  );
};

export default Login;
