import useURLValues from "../../../hooks/useURLValues";
import {
  useCalcDataQuery
} from "../../../services/apiSlice";

const MonthPanelColumnsHeader = () => {
  const { yearFromURL, monthFromURL } = useURLValues();
  const { data: dataCalc } = useCalcDataQuery({
    year: yearFromURL,
    month: monthFromURL,
  });

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
          <div
            key={headerText}
            className="p-1 bg-primary-subtle text-dark-emphasis fw-medium w-100 border-4 border-bottom border-white"
            style={{ fontSize: "clamp(0.8rem, 3.4vw, 1rem)" }}
          >
            {headerText} {""}
            {counter}
          </div>
        );
      })}
    </>
  );
};

export default MonthPanelColumnsHeader;
