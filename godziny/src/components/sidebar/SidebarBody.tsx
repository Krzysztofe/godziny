import Offcanvas from "react-bootstrap/Offcanvas";
import useMonthURLToString from "../../hooks/useMonthURLToString";
import useURLValues from "../../hooks/useURLValues";
import CollapseComponent from "../CollapseComponent";
import FormHoursContext from "../formHours/FormHoursContext";
import CollapseMonthsList from "../collapseMonths/CollapseMonthsList";
import FormDayContext from "./formDay/FormDayContext";
import FormMonthContext from "../formMonth/FormMonthContext";
import FormUserContext from "../formUser/FormUserContext";

const SidebarBody = () => {
  const { isMonthInURL } = useURLValues();
  const { monthURLStringFormat } = useMonthURLToString();

  return (
    <Offcanvas.Body className="scrolHidden flex-grow-0 p-0 border border-4 border-white bg-white rounded">
      {isMonthInURL && (
        <CollapseComponent title={monthURLStringFormat}>
          <CollapseMonthsList />
        </CollapseComponent>
      )}
      {isMonthInURL && (
        <div className="mt-1">
          <CollapseComponent title={"Zapisz godziny"}>
            <FormHoursContext />
          </CollapseComponent>
        </div>
      )}
      {/* {isMonthInURL && <MonthHoursSummary />} */}
      {isMonthInURL && <FormDayContext />}



      {!isMonthInURL && (
        <CollapseComponent title={"Zapisz miesiąc"}>
          <FormMonthContext />
        </CollapseComponent>
      )}
      {!isMonthInURL && (
        <div className="mt-1">
          <CollapseComponent title={"Zapisz użytkownika"}>
            <FormUserContext />
          </CollapseComponent>
        </div>
      )}
    </Offcanvas.Body>
  );
};

export default SidebarBody;
