import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useHTTPState from "../../../../hooks/useHTTPState";
import { useCalcDataQuery } from "../../../../services/apiSlice";
import "./_formHeaderMonthPAnel.scss";
import useMonthPanelHeaderFormik from "./useMonthPanelHeaderFormik";
import useURLValues from "../../../../hooks/useURLValues";

const MonhPanelHeaderForm = () => {
  const { formik, success } = useMonthPanelHeaderFormik();
  const { yearFromURL, monthFromURL } = useURLValues();
  const { data: dataCalc } = useCalcDataQuery({
    year: yearFromURL,
    month: monthFromURL,
  });

  const { btnContent } = useHTTPState(success, "Zapisz liczbę godzin");

  return (
    <Form onSubmit={formik.handleSubmit} className="my-2">
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
        {dataCalc?.submittedHours + dataCalc?.acceptedHours >
        +formik.values.allHours
          ? `Podaj ilość godzin większą od ${
              dataCalc?.submittedHours + dataCalc?.acceptedHours
            } `
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
            background: `linear-gradient(to right, olive 0%, red ${formik.values.allHours}%, transparent ${formik.values.allHours}%, transparent 100%)`,
          }}
        />
        <div className="fw-medium">320</div>
      </Form.Group>

      <Button
        type="submit"
        variant="info"
        size="sm"
        className="fw-medium d-block mx-auto mt-2 col-sm-4 col-md-3 col-lg-2"
        disabled={success.isLoading}
      >
        {btnContent}
      </Button>
    </Form>
  );
};

export default MonhPanelHeaderForm;
