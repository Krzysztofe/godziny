import useURLValues from "../../../hooks/useURLValues";
import SettingsReturnButton from "./SettingsReturnButton";
import ListLink from "./ListLink";

const useDataSidebarNav = () => {
  const { isMonthInURL } = useURLValues();

  const returnButton = !isMonthInURL && <SettingsReturnButton />;

  const dataSidebarNavItems = [returnButton, <ListLink />];

  return { dataSidebarNavItems };
};

export default useDataSidebarNav;
