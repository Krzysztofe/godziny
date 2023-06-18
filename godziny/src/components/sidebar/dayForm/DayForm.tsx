import { FcApproval } from "react-icons/fc";
import RadioInput from "../../inputs/RadioInput";
import TextInput from "../../inputs/TextInput";
import useDayForm from "./useDayForm";
import { useParams, useLocation } from "react-router-dom";
import useDataBaseValues from "../../../pages/monthPanel/useDataBaseValues";
import { Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const DayForm = () => {
  const { monthURL } = useParams();
  const { formik, success } = useDayForm();
  const urlParts = useLocation().pathname.split("/");
  const lastPartMonthURL = urlParts[urlParts.length - 1];

  const { dataCurrentHours, databaseAllHours } =
    useDataBaseValues(lastPartMonthURL);

  let errorHoursContent = <div></div>;

  if (dataCurrentHours - +formik.values.hours < 0) {
    errorHoursContent = (
      <small style={{ color: "red" }}>Brak godzin do wykorzystania </small>
    );
  }

  if (databaseAllHours === 0) {
    errorHoursContent = (
      <small style={{ color: "red" }}> Podaj godziny w miesiącu </small>
    );
  }

  let btnContent = <FcApproval />;

  if (success.isLoading) {
    btnContent = (
      <Spinner animation="border" size="sm" variant="secondary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (success.isError) {
    btnContent = <div> "Błąd" </div>;
  }

  return (
    <Form onSubmit={formik.handleSubmit} className="mt-4">
      <Form.Select
        name="userName"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        size="sm"
        className="rounded-0"
      >
        <option>Podaj imię</option>
        {["Jan", "Maria", "Mariola"].map(name => {
          return (
            <option key={name} value={name}>
              {name}
            </option>
          );
        })}
      </Form.Select>

      <Form.Text
        className="text-danger d-block mt-0 mb-1 lh-0"
        style={{ fontSize: "0.7rem", height: "1rem" }}
      >
        {formik.touched.userName &&
          formik.errors.userName &&
          formik.errors.userName}
      </Form.Text>

      <Form.Group className="">
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
          className="rounded-0"
        />
        <Form.Text
          className="text-danger d-block mt-0 mb-1 lh-0"
          style={{ fontSize: "0.7rem", height: "1rem" }}
        >
          {formik.touched.date && formik.errors.date && formik.errors.date}
        </Form.Text>
      </Form.Group>

      <Form.Select
        name="hours"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        size="sm"
        className="rounded-0"
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

      <Form.Text
        className="text-danger d-block mt-0 mb-1 lh-0"
        style={{ fontSize: "0.7rem", height: "1rem" }}
      >
        {formik.touched.hours && formik.errors.hours && formik.errors.hours}
      </Form.Text>

      <Form.Select
        name="place"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        size="sm"
        className="rounded-0"
      >
        <option>Lokalizacja</option>
        <option value="Wewnątrz">Wewnątrz</option>
        <option value="Poza">Poza</option>
      </Form.Select>

      <Form.Text
        className="text-danger d-block mt-0 mb-1 lh-0"
        style={{ fontSize: "0.7rem", height: "1rem" }}
      >
        {formik.touched.place && formik.errors.place && formik.errors.place}
      </Form.Text>

      {errorHoursContent}
      <div className="d-grid">
        <Button
          variant="primary"
          type="submit"
          className="rounded-0 fw-medium mt-4"
        >
          {btnContent}
        </Button>
      </div>
    </Form>
  );
};

export default DayForm;
