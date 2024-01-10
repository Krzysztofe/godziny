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
      to="/ustawienia"
      className={({ isActive }) =>
        isActive
          ? "text-dark text-decoration-none _fs-3"
          : "text-light-emphasis text-decoration-none _fs-3"
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
