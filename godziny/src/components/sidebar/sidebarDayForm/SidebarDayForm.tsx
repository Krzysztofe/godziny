import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { dateInNext14Days, dateInNext60Days } from "../../../data/dataCurrentDates";
import useHTTPState from "../../../hooks/useHTTPState";
import {
  useCalcDataQuery,
  useMonthDataQuery,
} from "../../../services/apiSlice";
import "./_dayForm.scss";
import useSidebarDayFormik from "./useSidebarDayFormik";
import useURLValues from "../../../hooks/useURLValues";

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
      {/* userName */}

      <Form.Group>
        <Form.Label htmlFor="userName" className="mb-0 fs-7">
          Podaj imię
        </Form.Label>

        <Form.Select
          id="userName"
          name="userName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          size="sm"
          className="p-0 px-1 border border-primary"
          style={{
            cursor: "pointer",
          }}
        >
          <option>Imię</option>
          {["Jan", "Maria", "Mariola"].map(name => {
            return (
              <option key={name} value={name}>
                {name}
              </option>
            );
          })}
        </Form.Select>

        <div
          className="text-danger d-block mt-0 fs-8"
          style={{ height: "0.7rem" }}
        >
          {formik.touched.userName &&
            formik.errors.userName &&
            formik.errors.userName}
        </div>
      </Form.Group>

      {/* date */}

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

      {/* hours */}

      <Form.Group>
        <Form.Label htmlFor="hours" className="mb-0 fs-7">
          Podaj liczbę godzin
        </Form.Label>
        <Form.Select
          id="hours"
          name="hours"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          size="sm"
          className="p-0 px-1 border border-primary"
          style={{ cursor: "pointer" }}
        >
          <option>Liczba godzin </option>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => {
            return (
              <option key={item} value={+item}>
                {item}
              </option>
            );
          })}
        </Form.Select>

        <div
          className="text-danger d-block mt-0 fs-8"
          style={{ height: "0.7rem" }}
        >
          {formik.touched.hours && formik.errors.hours && formik.errors.hours}
        </div>
      </Form.Group>

      {/* localization */}

      <Form.Group>
        <Form.Label htmlFor="place" className="mb-0 fs-7">
          Podaj lokalizację
        </Form.Label>
        <Form.Select
          id="place"
          name="place"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          size="sm"
          className="p-0 px-1 border border-primary"
          style={{ cursor: "pointer" }}
        >
          <option>Lokalizacja</option>
          <option value="Wewnątrz">Wewnątrz</option>
          <option value="Poza">Poza</option>
        </Form.Select>

        <div
          className="text-danger d-block mt-0 fs-8"
          style={{ height: "0.7rem" }}
        >
          {formik.touched.place && formik.errors.place && formik.errors.place}
        </div>
      </Form.Group>

      <Button
        variant="info"
        type="submit"
        disabled={success.isLoading}
        className="fw-medium w-100 mt-2 "
      >
        {btnContent}
      </Button>

      <div
        className="text-danger d-block mt-0 fs-8"
        style={{ height: "0.7rem" }}
      >
        {dataCalc?.currentHours && dataCalc?.currentHours - +formik.values.hours < 0
          ? "Brak dostępnych godzin"
          : ""}
      </div>
    </Form>
  );
};

export default SidebarDayForm;
