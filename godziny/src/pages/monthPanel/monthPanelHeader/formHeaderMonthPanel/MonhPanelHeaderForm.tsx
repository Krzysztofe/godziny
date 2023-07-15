import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useHTTPState from "../../../../hooks/useHTTPState";
import { useCalcDataQuery } from "../../../../services/apiSliceMonths";
import "./_formHeaderMonthPanel.scss";
import useMonthPanelHeaderFormik from "./useMonthPanelHeaderFormik";
import useURLValues from "../../../../hooks/useURLValues";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

const MonhPanelHeaderForm = () => {
  const { formik, success } = useMonthPanelHeaderFormik();
  const { btnContent } = useHTTPState(success, "Zapisz liczbę godzin");
  const { month } = useSelector((state: RootState) => state.hoursPanel);

  const submittedHours = month?.calc.submittedHours;
  const acceptedHours = month?.calc.acceptedHours;

  const gradientValue = formik.values.allHours / 3.2;
  const gradientBackground: string = `linear-gradient(to right, rgba(180,120,255) ${gradientValue}%, rgba(180,180,255) ${gradientValue}%)`;

  return (
    <Form
      onSubmit={formik.handleSubmit}
      className="p-2 bg-primary rounded-bottom-1"
    >
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
        className="p-0 px-1 mx-auto mb-2 border border-primary"
        style={{ minHeight: 0, cursor: "pointer", width: "fit-content" }}
      />

      <div
        className="text-danger d-block mt-0 fs-8 text-center"
        style={{ height: "0.7rem" }}
      >
        {submittedHours + acceptedHours > +formik.values.allHours
          ? `Podaj ilość godzin większą od ${submittedHours + acceptedHours} `
          : ""}
      </div>

      <Form.Group className="mt-2 d-flex align-items-center w-100">
        <div className="fw-medium">0</div>
        <Form.Range
          name="allHours"
          min={0}
          max={320}
          value={formik.values.allHours}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="form-range custom-range mx-2 medium"
          style={{
            height: 10,
            background: gradientBackground,
          }}
        />
        <div className="fw-medium">320</div>
      </Form.Group>

      <Button
        type="submit"
        variant="info"
        size="sm"
        className="fw-medium d-block mx-auto mt-2 col-7 col-sm-6 col-md-4 col-lg-3 col-xxl-2"
        disabled={success.isLoading}
      >
        {btnContent}
      </Button>
    </Form>
  );
};

export default MonhPanelHeaderForm;
