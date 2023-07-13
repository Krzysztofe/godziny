import { Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useLoginFormik from "./useLoginFormik";


const Login = () => {
  const { formik, isLoading } = useLoginFormik();

  let btnContent;

  if (isLoading) {
    btnContent = (
      <Spinner animation="border" size="sm" variant="secondary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else {
    btnContent = "Zaloguj";
  }

  return (
    <main className="d-flex justify-content-center  align-items-center vh-100">
      <Form onSubmit={formik.handleSubmit} className="w-sm-90 border p-4 ">
        <Form.Group className="mx-auto">
          <div className="text-center fs-3 fw-medium mb-4">
            <Form.Label htmlFor="password" className="mb-0">
              Podaj hasło
            </Form.Label>
          </div>

          <Form.Control
            id="password"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Hasło"
            disabled={isLoading}
            size="lg"
            className="shadow-sm"
          />
        </Form.Group>
        <div className="d-grid">
          <Button
            disabled={isLoading}
            variant="info"
            type="submit"
            className="fw-medium mt-4"
          >
            {btnContent}
          </Button>
        </div>
      </Form>
    </main>
  );
};

export default Login;
