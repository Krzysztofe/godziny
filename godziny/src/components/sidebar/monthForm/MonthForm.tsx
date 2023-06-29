import { Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useMonthForm from "./useMonthForm";
import { AiOutlinePlusCircle } from "react-icons/ai";

const MonthForm = () => {
  const { formik, success } = useMonthForm();

  let btnContent = (
    <AiOutlinePlusCircle
      className="info-text-emphasis"
      style={{ fontSize: "2rem" }}
    />
  );

  if (success.isLoading) {
    btnContent = (
      <Spinner animation="border" variant="primary" size="sm">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (success.isError) {
    btnContent = <span> "Błąd" </span>;
  }

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="d-flex align-items-center">
          <Form.Control
            type="month"
            name="monthYear"
            min="2023-06"
            max="2025-12"
            value={formik.values.monthYear}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            size="sm"
            className="p-0 px-1 d-block border border-primary"
            style={{ minHeight: 0, height: "fit-content", cursor: "pointer" }}
          />

          <Button
            type="submit"
            variant="secondary"
            size="sm"
            className="rounded-0 d-flex align-items-center justify-content-center px-0  bg-transparent text-info-emphasis border-0"
            style={{ width: "25%", height: "100%" }}
          >
            {btnContent}
          </Button>

          {/* <Form.Text
          className="text-danger py-1"
          style={{ fontSize: "0.7rem" }}
        >    {formik.touched.allHours &&
                formik.errors.allHours &&
                formik.errors.allHours}</Form.Text> */}
        </Form.Group>
      </Form>
    </>
  );
};

export default MonthForm;
