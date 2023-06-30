import { Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLocation, useParams } from "react-router-dom";
import useDatabaseValues from "../../../hooks/useDatabaseValues";
import useDayForm from "./useDayForm";

const DayForm = () => {
  const { monthURL } = useParams();
  const { formik, success } = useDayForm();
  const urlParts = useLocation().pathname.split("/");
  const lastPartMonthURL = urlParts[urlParts.length - 1];

  const { dataCurrentHours, databaseAllHours } =
    useDatabaseValues(lastPartMonthURL);

  let btnContent = <span>Zapisz dzień</span>;

  if (success.isLoading) {
    btnContent = (
      <Spinner animation="border" size="sm" variant="secondary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (success.isError) {
    btnContent = <span> "Błąd" </span>;
  }

  if (databaseAllHours === 0) {
    btnContent = <span style={{ color: "red" }}> Podaj godziny</span>;
  }

  if (dataCurrentHours - +formik.values.hours < 0) {
    btnContent = <span style={{ color: "red" }}>Brak godzin </span>;
  }

  return (
    <Form onSubmit={formik.handleSubmit} className="mt-2">
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
          min={1}
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
    </Form>
  );
};

export default DayForm;
