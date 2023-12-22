import FormHoursContext from "../formHours/FormHoursContext";
import CollapseMonthsList from "../CollapseMonthsList";
import FormDayContext from "../formDay/FormDayContext";
import FormMonthContext from "../formMonth/FormMonthContext";
import FormUserContext from "../formUser/FormUserContext";
import CollapseContainer from "../CollapseContainer";
import useMonthURLToString from "../../hooks/useMonthURLToString";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const useDataSidebar = () => {
  const { monthURLStringFormat } = useMonthURLToString();
  const { month } = useSelector((state: RootState) => state.monthPanel);

  const monthStringCapitalize =
    monthURLStringFormat[0]?.toUpperCase() + monthURLStringFormat.slice(1);

  const printFormHours = month && (
    <div className="mt-1">
      <CollapseContainer title={"Zapisz godziny"}>
        <FormHoursContext />
      </CollapseContainer>
    </div>
  );
  const printFormDay = month && <FormDayContext />;

  const dataMonthPanel = [
    <CollapseContainer title={monthStringCapitalize}>
      <CollapseMonthsList />
    </CollapseContainer>,
    // printFormHours,
    printFormDay,
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
