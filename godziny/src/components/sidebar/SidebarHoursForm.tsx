import React from "react";
import useHTTPState from "../../hooks/useHTTPState";
import useMonthPanelHeaderFormik from "../../pages/monthPanel/monthPanelHeader/formHeaderMonthPanel/useMonthPanelHeaderFormik";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SidebarHoursForm = () => {
  const { formik, success } = useMonthPanelHeaderFormik();
  const { btnContent } = useHTTPState(success, "Dodaj godziny");
  const { month } = useSelector((state: RootState) => state.monthsPanel);

  const submittedHours = month?.calc.submittedHours;
  const acceptedHours = month?.calc.acceptedHours;

  const gradientValue = formik.values.allHours / 3.2;
  const gradientBackground: string = `linear-gradient(to right, rgba(180,120,255) ${gradientValue}%, rgba(180,180,255) ${gradientValue}%)`;

  return (
    <Form onSubmit={formik.handleSubmit} className="">
      <div className="d-flex">
        <Form.Control
          type="number"
          name="allHours"
          min={0}
          max={320}
          value={formik.values.allHours}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Liczba"
          size="sm"
          className="p-0 px-1 mb-2 border border-primary"
          style={{ minHeight: 0, cursor: "pointer", width: "fit-content" }}
        />
        <span> &nbsp; h</span>
      </div>

      {/* <div
        className="text-danger d-block mt-0 fs-8 text-center"
        style={{ height: "0.7rem" }}
      >
        {submittedHours + acceptedHours > +formik.values.allHours
          ? `Min. ${submittedHours + acceptedHours} h`
          : ""}
      </div> */}

      <Form.Group className="mt-2 d-flex align-items-center w-100">
        <Form.Range
          name="allHours"
          min={0}
          max={320}
          value={formik.values.allHours}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="form-range custom-range medium"
          style={{
            height: 10,
            background: gradientBackground,
          }}
        />
      </Form.Group>

      <div className="d-flex justify-content-between">
        <div className="fw-medium">0 h</div>

        <div className="text-danger  mt-auto fs-8">
          {submittedHours + acceptedHours > +formik.values.allHours
            ? `Min. ${submittedHours + acceptedHours} h`
            : ""}
        </div>
        <div className="fw-medium">320 h</div>
      </div>
      <Button
        type="submit"
        variant="info"
        size="sm"
        className="fw-medium w-100"
        disabled={success.isLoading}
      >
        {btnContent}
      </Button>
    </Form>
  );
};

export default SidebarHoursForm;
