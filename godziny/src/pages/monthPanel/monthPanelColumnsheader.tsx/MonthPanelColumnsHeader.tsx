import useURLValues from "../../../hooks/useURLValues";
import { useCalcDataQuery } from "../../../services/apiSlice";
import Col from "react-bootstrap/Col";

interface Props {
  thumbPosition: number;
}

const MonthPanelColumnsHeader = (props: Props) => {
  const { yearFromURL, monthFromURL } = useURLValues();
  const { data: dataCalc } = useCalcDataQuery({
    year: yearFromURL,
    month: monthFromURL,
  });

  console.log("", props.thumbPosition);

  return (
    <>
      {[
        {
          headerText: "Złożone:",
          counter: dataCalc?.submittedHours,
        },
        {
          headerText: "Przyznane:",
          counter: dataCalc?.acceptedHours,
        },
        {
          headerText: "Odrzucone:",
          counter: dataCalc?.rejectedHours,
        },
      ].map(({ headerText, counter }) => {
        return (
          <Col
            key={headerText}
            className={`bg-primary-subtle text-dark-emphasis fw-medium p-1 ${
              props.thumbPosition === 0
                ? ""
                : " border-bottom border-1 border-dark"
            }`}
            style={{ fontSize: "clamp(0.8rem, 3.4vw, 1rem)" }}
          >
            {headerText} {""}
            {counter}
          </Col>
        );
      })}
    </>
  );
};

export default MonthPanelColumnsHeader;
