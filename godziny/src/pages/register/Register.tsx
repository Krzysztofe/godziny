import useRegisterFormik from "./useRegisterFormik";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Register = () => {
  const { formik, isLoading } = useRegisterFormik();



  const dataRegister = [
    {
      labelText: "Podaj email",
      name: "email",
      type: "email",
      placeholder: "Email",
    },
    {
      labelText: "Podaj hasło",
      name: "password",
      type: "password",
      placeholder: "Hasło",
    },
    {
      labelText: "Powtórz hasło",
      name: "passwordRepeated",
      type: "password",
      placeholder: "Hasło",
    },
  ];

  return (
    <Form onSubmit={formik.handleSubmit} className="w-sm-90 border p-4 ">
      {dataRegister.map(({ labelText, name, type, placeholder }) => {
        return (
          <Form.Group className="mx-auto">
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
              disabled={isLoading}
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

      <div className="d-grid">
        <Button
          disabled={isLoading}
          variant="info"
          type="submit"
          className="fw-medium mt-4"
        >
          {/* {btnContent} */}
          eee
        </Button>
      </div>
    </Form>
  );
};

export default Register;
