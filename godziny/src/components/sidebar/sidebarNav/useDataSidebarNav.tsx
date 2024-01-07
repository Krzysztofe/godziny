import { NavLink } from "react-router-dom";
import { AiTwotoneSetting } from "react-icons/ai";
import useURLValues from "../../../hooks/useURLValues";
import SettingsReturnButton from "../SettingsReturnButton";
import SidebarLogout from "../SidebarLogout";

const useDataSidebarNav = () => {
  const { isMonthInURL } = useURLValues();

  const returnButton = !isMonthInURL && <SettingsReturnButton />;

  const dataSidebarNavItems = [
    returnButton,
    <NavLink
      to="/godziny/ustawienia"
      className={({ isActive }) =>
        isActive
          ? "text-primary-emphasis text-decoration-none"
          : "text-primary text-decoration-none"
      }
      end
    >
      <>
        <AiTwotoneSetting /> Ustawienia
      </>
    </NavLink>,
    <SidebarLogout />,
  ];

  return { dataSidebarNavItems };
};

export default useDataSidebarNav;
