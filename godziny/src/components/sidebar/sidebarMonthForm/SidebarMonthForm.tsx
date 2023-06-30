import { Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useSidebarMonthFormik from "./useSidebarMonthFormik";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { error } from "console";

const SidebarMonthForm = () => {
  const { formik, success } = useSidebarMonthFormik();

  let btnContent = <AiOutlinePlusCircle style={{ fontSize: "1.5rem" }} />;

  if (success.isLoading) {
    btnContent = (
      <Spinner
        animation="border"
        variant="primary"
        style={{ height: "1.5rem", width: "1.5rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (success.isError) {
    btnContent = <span> "Błąd" </span>;
  }

  return (
    <>
      <Form onSubmit={formik.handleSubmit} className="mt-1">
        <Form.Group>
          <Form.Label htmlFor="monthDate" className="mb-0 fs-7">
            Podaj miesiąc
          </Form.Label>
          <div className="d-flex">
            <Form.Control
              id="monthDate"
              type="month"
              name="monthDate"
              min="2023-06"
              max="2025-12"
              value={formik.values.monthDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              size="sm"
              className="p-0 px-1 d-block border border-primary"
              style={{ minHeight: 0, height: "fit-content", cursor: "pointer" }}
            />
            <Button
              type="submit"
              disabled={success.isLoading}
              className="d-flex justify-content-center align-items-start m-0 justify-content-center p-0 ms-1  text-info-emphasis border-0 bg-transparent"
            >
              {btnContent}
            </Button>
          </div>
        </Form.Group>
        <Form.Text
          className="text-danger d-block mt-0 lh-0"
          style={{ fontSize: "0.6rem", height: "0.7rem" }}
        >
          {formik.touched.monthDate &&
            formik.errors.monthDate &&
            formik.errors.monthDate}
        </Form.Text>
      </Form>
    </>
  );
};

export default SidebarMonthForm;
