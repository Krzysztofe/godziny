import { useSelector } from "react-redux";
import useMonthURLToString from "../../hooks/useMonthURLToString";
import { RootState } from "../../redux/store";
import CollapseContainer from "../collapseContainer/CollapseContainer";
import FormDayContext from "./formDay/forDayContex/FormDayContext";
import FormMonthContext from "./formMonth/FormMonthContext";
import FormUserContext from "./formUser/FormUserContext";
import ListMonthsInCollapse from "./listMonthsInCollapse/ListMonthsInCollapse";

const useDataSidebar = () => {
  const { monthURLStringFormat } = useMonthURLToString();
  const { month } = useSelector((state: RootState) => state.monthPanel);

  const monthStringCapitalize =
    monthURLStringFormat[0]?.toUpperCase() + monthURLStringFormat.slice(1);

  const printFormDay = month && <FormDayContext />;

  const dataMonthPanel = [
    <CollapseContainer title={monthStringCapitalize}>
      <ListMonthsInCollapse />
    </CollapseContainer>,
    printFormDay,
  ];

  const dataSettings = [
    <CollapseContainer title={"Zapisz miesiąc"}>
      <FormMonthContext />
    </CollapseContainer>,
    <div className="mt-4">
      <CollapseContainer title={"Zapisz użytkownika"}>
        <FormUserContext />
      </CollapseContainer>
    </div>,
  ];

  return { dataMonthPanel, dataSettings };
};

export default useDataSidebar;
