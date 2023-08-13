import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

interface Props {
  thumbPosition: number;
}

const MonthPanelColumnsHeader = (props: Props) => {
  
  const { month } = useSelector((state: RootState) => state.monthsPanel);

  return (
    <>
      {[
        {
          headerText: "Złożone:",
          counter: month?.calc?.submittedHours,
        },
        {
          headerText: "Przyznane:",
          counter: month?.calc?.acceptedHours,
        },
        {
          headerText: "Odrzucone:",
          counter: month?.calc?.rejectedHours,
        },
      ].map(({ headerText, counter }) => {
        return (
          <Col
            key={headerText}
            className={`text-dark-emphasis bg-white fw-medium p-1 ${
              props.thumbPosition === 0
                ? "border-bottom border-2 border-white"
                : "border-bottom border-2 border-dark-subtle"
            }`}
            style={{
              fontSize: "clamp(0.8rem, 3.4vw, 1rem)",
            }}
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
