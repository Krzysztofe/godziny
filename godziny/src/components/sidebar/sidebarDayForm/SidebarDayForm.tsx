import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  dateInNext14Days,
  dateInNext60Days,
} from "../../../data/dataCurrentDates";
import useHTTPState from "../../../hooks/useHTTPState";
import {
  useCalcDataQuery,
  useMonthDataQuery,
} from "../../../services/apiSlice";
import "./_dayForm.scss";
import useSidebarDayFormik from "./useSidebarDayFormik";
import useURLValues from "../../../hooks/useURLValues";
import { dataSelects } from "./dataSidebarDayForm";

const SidebarDayForm = () => {
  const { yearFromURL, monthFromURL } = useURLValues();
  const { data: dataMonth } = useMonthDataQuery({
    year: yearFromURL,
    month: monthFromURL,
  });

  const { data: dataCalc } = useCalcDataQuery({
    year: yearFromURL,
    month: monthFromURL,
  });

  const { formik, success } = useSidebarDayFormik();
  const { btnContent } = useHTTPState(success, "Zapisz dzień");

 

  return (
    <Form
      onSubmit={formik.handleSubmit}
      className={`mt-2 ${!dataMonth ? "d-none" : ""} ${
        dataCalc?.allHours === 0 ? "formContainer" : ""
      }`}
    >
      {dataSelects.map(({ name, firstOption, labelText, options }) => {
        return (
          <Form.Group key={labelText}>
            <Form.Label htmlFor={name} className="mb-0 fs-7">
              {labelText}
            </Form.Label>

            <Form.Select
              id={name}
              name={name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              size="sm"
              className="p-0 px-1 border border-primary"
              style={{
                cursor: "pointer",
              }}
            >
              <option>{firstOption}</option>
              {options.map((option: string | number) => {
                return (
                  <option key={option} value={option}>
                    {option}
                  </option>
                );
              })}
            </Form.Select>

            <div
              className="text-danger d-block mt-0 fs-8"
              style={{ height: "0.7rem" }}
            >
              {formik.touched[name as keyof typeof formik.touched] &&
                formik.errors[name as keyof typeof formik.touched] &&
                formik.errors[name as keyof typeof formik.touched]}
            </div>
          </Form.Group>
        );
      })}

      <Form.Group>
        <Form.Label htmlFor="date" className="mb-0 fs-7">
          Podaj dzień
        </Form.Label>
        <Form.Control
          id="date"
          type="date"
          name="date"
          value={formik.values.date}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          min={dateInNext14Days}
          max={dateInNext60Days}
          placeholder="Liczba"
          size="sm"
          className="p-0 px-1 border border-primary"
          style={{ minHeight: 0, cursor: "pointer" }}
        />
        <div
          className="text-danger d-block mt-0 fs-8"
          style={{ height: "0.7rem" }}
        >
          {formik.touched.date && formik.errors.date && formik.errors.date}
        </div>
      </Form.Group>

      <Button
        variant="emphasis"
        type="submit"
        disabled={success.isLoading}
        className="fw-medium w-100 mt-2 bg-info text-white"
      >
        {btnContent}
      </Button>

      <div
        className="text-danger d-block mt-0 fs-8"
        style={{ height: "0.7rem" }}
      >
        {dataCalc?.currentHours &&
        dataCalc?.currentHours - +formik.values.hours < 0
          ? "Brak dostępnych godzin"
          : ""}
      </div>
    </Form>
  );
};

export default SidebarDayForm;