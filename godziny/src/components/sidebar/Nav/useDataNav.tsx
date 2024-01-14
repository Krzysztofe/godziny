import useURLValues from "../../../hooks/useURLValues";
import ReturnButton from "./ReturnButton";
import ListLink from "./ListLink";

const useDataNav = () => {
  const { isMonthInURL } = useURLValues();

  const returnButton = !isMonthInURL && <ReturnButton />;

  const dataSidebarNavItems = [returnButton, <ListLink />];

  return { dataSidebarNavItems };
};

export default useDataNav;
