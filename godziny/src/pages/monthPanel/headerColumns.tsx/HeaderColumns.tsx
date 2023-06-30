import { useParams } from "react-router-dom";
import useDatabaseValues from "../../../hooks/useMonthURLToString";

const HeaderColumns = () => {
  const { monthURL } = useParams();
  const {
    databaseAcceptedHours,
    databaseRejectedHours,
    dataBaseSubmitedHours,
  } = useDatabaseValues(monthURL);

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
          counter: dataBaseSubmitedHours,
        },
        {
          headerText: "Przyznane:",
          counter: databaseAcceptedHours,
        },
        {
          headerText: "Odrzucone:",
          counter: databaseRejectedHours,
        },
      ].map(({ headerText, counter }) => {
        return (
          <div
            key={headerText}
            className="p-1 bg-primary-subtle text-dark-emphasis fw-medium w-100 "
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

export default HeaderColumns;
