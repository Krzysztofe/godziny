import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  currMonthDigits,
  currYearDigits,
} from "../../../data/dataCurrentDates";
import useHTTPState from "../../../hooks/useHTTPState";
import useSidebarMonthFormik from "./useSidebarMonthFormik";
import { AiOutlinePlusCircle } from "react-icons/ai";

const SidebarMonthForm = () => {
  const { formik, success } = useSidebarMonthFormik();
  const { btnContent } = useHTTPState(
    success,
    <AiOutlinePlusCircle className="text-info" style={{ fontSize: "1.4rem" }} />
  );

  return (
    <>
      <Form onSubmit={formik.handleSubmit} className="mt-1">
        <Form.Group>
          <Form.Label htmlFor="monthDate" className="mb-0 fs-6 fw-medium">
            Podaj miesiąc
          </Form.Label>
          <div className="d-flex">
            <Form.Control
              id="monthDate"
              type="month"
              name="monthDate"
              min={`${currYearDigits}-${currMonthDigits}`}
              max="2025-12"
              value={formik.values.monthDate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              size="sm"
              className="p-0 px-1 d-block border border-primary text-capitalize"
              style={{ minHeight: 0, height: "fit-content", cursor: "pointer" }}
            />
            <Button
              type="submit"
              disabled={success.isLoading}
              className="col-2 d-flex justify-content-center align-items-center m-0 justify-content-center p-0 m-0 ms-1  text-info-emphasis border-0 bg-transparent"
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
