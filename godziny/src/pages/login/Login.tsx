import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { auth } from "../../data/firebaseConfig";
import useLoginFormik from "./useLoginFormik";
import { currYearNumber, currMonthNumber } from "../../data/dataCurrentDates";

const Login = () => {
  const navigate = useNavigate();
  const { formik, error } = useLoginFormik();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      user && navigate(`/miesiac/${currYearNumber}-${currMonthNumber}`);
    });
  }, []);

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
            size="lg"
            className="shadow-sm"
          />
          <Form.Text
            className="text-danger py-1"
            style={{ fontSize: "0.7rem" }}
          >
            {error && `Błąd ${error}`}
          </Form.Text>
        </Form.Group>
        <div className="d-grid">
          <Button variant="info" type="submit" className="fw-medium mt-4">
            Zaloguj
          </Button>
        </div>
      </Form>
    </main>
  );
};

export default Login;
