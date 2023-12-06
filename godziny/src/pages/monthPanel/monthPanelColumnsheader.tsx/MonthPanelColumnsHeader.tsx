import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { v4 as UUID } from "uuid";

interface Props {
  thumbPosition: number;
}

const MonthPanelColumnsHeader = (props: Props) => {
  const { month } = useSelector((state: RootState) => state.monthPanel);

  return (
    <>
      {[
        {
          headerText: "Złożone:",
          counter: month?.calcHours?.submittedHours,
        },
        {
          headerText: "Przyznane:",
          counter: month?.calcHours?.acceptedHours,
        },
        {
          headerText: "Odrzucone:",
          counter: month?.calcHours?.rejectedHours,
        },
      ].map(({ headerText, counter }) => {
        return (
          <Col
            key={headerText}
            className={`text-dark-emphasis bg-white fw-medium p-1 ${
              props.thumbPosition === 0
                ? "border-bottom border-3 border-white"
                : "border-bottom border-3"
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
