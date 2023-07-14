import useURLValues from "../../../hooks/useURLValues";
import { useCalcDataQuery } from "../../../services/apiSliceMonths";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

interface Props {
  thumbPosition: number;
}

const MonthPanelColumnsHeader = (props: Props) => {
  const { yearFromURL, monthFromURL } = useURLValues();
  const { data: dataCalc } = useCalcDataQuery({
    year: yearFromURL,
    month: monthFromURL,
  });

const { month } = useSelector((state: RootState) => state.hoursPanel);

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
            className={`bg-primary text-dark-emphasis fw-medium p-1 ${
              props.thumbPosition === 0
                ? ""
                : " border-bottom border-1 border-white"
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
