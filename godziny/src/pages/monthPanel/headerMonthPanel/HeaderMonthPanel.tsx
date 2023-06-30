import { useParams } from "react-router-dom";
import FormHeaderMonhPanel from "./formHeaderMonthPanel/FormHeaderMonhPanel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import useDatabaseValues from "../../../hooks/useDatabaseValues";

const HeaderMonthPanel = () => {
  const { monthURL } = useParams();

  const { databaseAllHours, dataCurrentHours } = useDatabaseValues(monthURL);

  const monthToDateFormat = monthURL && new Date(monthURL);
  const monthToString =
    monthToDateFormat &&
    new Intl.DateTimeFormat("pl-PL", {
      year: "numeric",
      month: "long",
      timeZone: "UTC",
    }).format(monthToDateFormat);

  return (
    <header className="me-3">
      <Container className="mx-0 ms-sm-auto">
        <FormHeaderMonhPanel />
        <div className="d-flex justify-content-center mb-1 fw-medium">
          <div className="text-end" style={{ width: "25%" }}>
            Wszystkie
          </div>
          <div className="text-center mx-2" style={{}}>
            {databaseAllHours} - {dataCurrentHours}
          </div>
          <div style={{ width: "25%" }}>Wolne</div>
        </div>
      </Container>
    </header>
  );
};

export default HeaderMonthPanel;
