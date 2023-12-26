import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import Counter from "../../../components/counter/Counter";

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
            className={`text-dark-emphasis fs-responsive bg-white fw-medium p-1 d-flex align-items-center  ${
              props.thumbPosition === 0
                ? "border-bottom border-3 border-white"
                : "border-bottom border-3"
            }`}
            style={{ height: "35px" }}
          >
            {headerText} {""}
            {counter ? <Counter counter={counter} /> : <Counter counter={0} />}
          </Col>
        );
      })}
    </>
  );
};

export default MonthPanelColumnsHeader;
