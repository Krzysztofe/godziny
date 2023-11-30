import Offcanvas from "react-bootstrap/Offcanvas";
import useMonthURLToString from "../../hooks/useMonthURLToString";
import useURLValues from "../../hooks/useURLValues";
import FormHoursContext from "../formHours/FormHoursContext";
import CollapseMonthsList from "../collapseMonths/CollapseMonthsList";
import FormDayContext from "../formDay/FormDayContext";
import FormMonthContext from "../formMonth/FormMonthContext";
import FormUserContext from "../formUser/FormUserContext";
import CollapseContainer from "../CollapseContainer";

const SidebarBody = () => {
  const { isMonthInURL } = useURLValues();
  const { monthURLStringFormat } = useMonthURLToString();

  return (
    <Offcanvas.Body className="scrolHidden flex-grow-0 p-0 border border-4 border-white bg-white rounded">
      {isMonthInURL && (
        <CollapseContainer title={monthURLStringFormat}>
          <CollapseMonthsList />
        </CollapseContainer>
      )}
      {isMonthInURL && (
        <div className="mt-1">
          <CollapseContainer title={"Zapisz godziny"}>
            <FormHoursContext />
          </CollapseContainer>
        </div>
      )}
      {/* {isMonthInURL && <MonthHoursSummary />} */}
      {isMonthInURL && <FormDayContext />}

      {!isMonthInURL && (
        <CollapseContainer title={"Zapisz miesiąc"}>
          <FormMonthContext />
        </CollapseContainer>
      )}
      {!isMonthInURL && (
        <div className="mt-1">
          <CollapseContainer title={"Zapisz użytkownika"}>
            <FormUserContext />
          </CollapseContainer>
        </div>
      )}
    </Offcanvas.Body>
  );
};

export default SidebarBody;
