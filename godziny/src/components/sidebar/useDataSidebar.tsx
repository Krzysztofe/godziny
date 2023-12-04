import FormHoursContext from "../formHours/FormHoursContext";
import CollapseMonthsList from "../CollapseMonthsList";
import FormDayContext from "../formDay/FormDayContext";
import FormMonthContext from "../formMonth/FormMonthContext";
import FormUserContext from "../formUser/FormUserContext";
import CollapseContainer from "../CollapseContainer";
import useMonthURLToString from "../../hooks/useMonthURLToString";
import useURLValues from "../../hooks/useURLValues";

const useDataSidebar = () => {
  const { monthURLStringFormat } = useMonthURLToString();

  const monthStringCapitalize =
    monthURLStringFormat[0]?.toUpperCase() + monthURLStringFormat.slice(1) 

  const dataMonthPanel = [
    <CollapseContainer title={monthStringCapitalize}>
      <CollapseMonthsList />
    </CollapseContainer>,
    <div className="mt-1">
      <CollapseContainer title={"Zapisz godziny"}>
        <FormHoursContext />
      </CollapseContainer>
    </div>,
    <FormDayContext />,
  ];

  const dataSettings = [
    <CollapseContainer title={"Zapisz miesiąc"}>
      <FormMonthContext />
    </CollapseContainer>,
    <div className="mt-1">
      <CollapseContainer title={"Zapisz użytkownika"}>
        <FormUserContext />
      </CollapseContainer>
    </div>,
  ];

  return { dataMonthPanel, dataSettings };
};

export default useDataSidebar;
