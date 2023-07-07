import { useParams } from "react-router-dom";
import useDatabaseValues from "../../../hooks/useDatabaseValues";
import useHoursCalc from "../colmns/useHoursCalc";
import useURLValues from "../../../hooks/useURLValues";
import {
  useCalcDataQuery,
  useMonthDataQuery,
} from "../../../services/apiSlice";

const ColumnsHeader = () => {
  const { yearFromURL, monthFromURL } = useURLValues();
  const { data: dataCalc } = useCalcDataQuery({
    year: yearFromURL,
    month: monthFromURL,
  });
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // const displayHeaderContent = windowWidth > 576;



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

export default ColumnsHeader;
