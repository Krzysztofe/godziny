import SidebarNav from "../sidebar/sidebarNav/SidebarNav";
import ButtonLogout from "./ButtonLogout";
import FormSearchContext from "./formSearch/formSearchContext/FormSearchContext";
import HeaderName from "./headerName/HeaderName";

const Header = () => {
  return (
    <header className="w-100 d-flex align-items-center border-bottom fs-3 position-relative">
      <HeaderName />
      <FormSearchContext />
      <div className="position-absolute top-0 d-flex h-100 end-0">
        <SidebarNav
          display={"d-flex align-items-center flex-row h-100 d-md-none"}
        />
        <ButtonLogout />
      </div>
    </header>
  );
};

export default Header;
