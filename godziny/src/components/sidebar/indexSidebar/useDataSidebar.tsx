import useMonthURLToString from "../../../hooks/useMonthURLToString";
import CollapseContainer from "../../collapseContainer/CollapseContainer";
import FormDayContext from "../formDay/forDayContex/FormDayContext";
import FormMonthContext from "../formMonth/FormMonthContext";
import FormUserContext from "../formUser/FormUserContext";
import ListMonthsInCollapse from "../listMonthsInCollapse/ListMonthsInCollapse";


const useDataSidebar = () => {
  const { monthURLStringFormat } = useMonthURLToString();
  

  const monthStringCapitalize =
    monthURLStringFormat[0]?.toUpperCase() + monthURLStringFormat.slice(1);

  const dataMonthPanel = [
    <CollapseContainer title={monthStringCapitalize}>
      <ListMonthsInCollapse />
    </CollapseContainer>,
    <FormDayContext />,
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
