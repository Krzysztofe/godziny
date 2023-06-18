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
      {[
        { type: "text", value: "userName", label: "Imię" },
        { type: "date", value: "date", label: "Dzień" },
        { type: "number", value: "hours", label: "Godz." },
      ].map(({ type, value, label }) => {
        return (
          <Form.Group key={label} className="">
            <div className=" fs-6 ">
              <Form.Label htmlFor="password" className="mb-0">
                {label}
              </Form.Label>
            </div>
            <Form.Control
              id={label}
              type={type}
              name={value}
              value={formik.values[value as keyof typeof formik.values]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder=""
              size="sm"
              className="shadow-sm rounded-0"
            />
            <Form.Text className="text-danger" style={{ fontSize: "0.7rem" }}>
              {formik.touched[value as keyof typeof formik.values] &&
                formik.errors[value as keyof typeof formik.values] &&
                formik.errors[value as keyof typeof formik.values]}
            </Form.Text>
          </Form.Group>
        );
      })}

      {["Wewnątrz", "Poza"].map(place => (
        <Form.Group key={place} className="mb-3">
          <Form.Check
            type="radio"
            id={place}
            name={"place"}
            value={place}
            label={place}
            onChange={formik.handleChange}
            checked={formik.values.place === place}
          />
        </Form.Group>
      ))}

      <Form.Text className="text-danger" style={{ fontSize: "0.7rem" }}>
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
