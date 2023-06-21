import { useParams } from "react-router-dom";
// import useDataBaseValues from "../hooksMonthPanel/useDataBaseValues";
import FormHeaderMonhPanel from "./formHeaderMonthPanel/FormHeaderMonhPanel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import useDataBaseValues from "../useDataBaseValues";

const HeaderMonthPanel = () => {
  const { monthURL } = useParams();

  const { databaseAllHours, dataCurrentHours } = useDataBaseValues(monthURL);

  const monthToDateFormat = monthURL && new Date(monthURL);
  const monthToString =
    monthToDateFormat &&
    new Intl.DateTimeFormat("pl-PL", {
      year: "numeric",
      month: "long",
      timeZone: "UTC",
    }).format(monthToDateFormat);

  return (
    <header>
      <Container>
        <Row>
          <Col sm={7} className="order-1 order-sm-2 px-0">
            <FormHeaderMonhPanel />
          </Col>

          <Col sm={5} className="order-2 order-sm-1 px-0">
            <div className="d-flex my-3">
              <div>Wszystkie: {databaseAllHours}</div>

              <div className="ms-4">Wolne: {dataCurrentHours}</div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default HeaderMonthPanel;
