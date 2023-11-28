import Offcanvas from "react-bootstrap/Offcanvas";
import useMonthURLToString from "../../hooks/useMonthURLToString";
import useURLValues from "../../hooks/useURLValues";
import MonthHoursSummary from "../../pages/monthPanel/monthPanelHeader/MonthPanelHeaderSummary";
import CollapseComponent from "../CollapseComponent";
import FormHours from "../collapseFormHours/FormHours";
import CollapseMonthsList from "../collapseMonths/CollapseMonthsList";
import FormDayContext from "./formDay/FormDayContext";
import SidebarMonthFormColapse from "./sidebarMonthFormCollapse/SidebarMonthFormColapse";
import SidebarMonthForm from "./sidebarMonthForm/SidebarMonthForm";


const SidebarBody = () => {
  const { isMonthInURL } = useURLValues();
  const { monthURLStringFormat } = useMonthURLToString();

  return (
    <Offcanvas.Body className="flex-grow-0 p-2 bg-white rounded monthListContainer">
      {!isMonthInURL && (
        <CollapseComponent title={"Zapisz miesiąc"}>
          <SidebarMonthForm />
        </CollapseComponent>
      )}

      {isMonthInURL && (
        <CollapseComponent title={monthURLStringFormat}>
          <CollapseMonthsList />
        </CollapseComponent>
      )}
      {isMonthInURL && (
        <CollapseComponent title={"Zapisz godziny"}>
          <FormHours />
        </CollapseComponent>
      )}
      {isMonthInURL && <MonthHoursSummary />}
      {isMonthInURL && <FormDayContext />}
    </Offcanvas.Body>
  );
};

export default SidebarBody;
