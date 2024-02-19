import useReduxListMonths from "../../../hooks/updateReduxDatabase/useReduxListMonths";
import { useUsersQuery } from "../../../services/apiSliceUsers";
import Nav from "../../sidebar/Nav/Nav";
import ButtonLogout from "../buttonLogout/ButtonLogout";
import FormSearchContext from "../formSearch/formSearchContext/FormSearchContext";
import HeaderName from "../headerName/HeaderName";
import "./_header.scss";



const Header = () => {
  useReduxListMonths();
  useUsersQuery();



  return (
    <header className="w-100 d-flex align-items-center border-bottom fs-3 position-relative _header">
      <HeaderName />
      <FormSearchContext />
      <div className="position-absolute top-0 d-flex h-100 end-0">
        <Nav styles={"d-flex align-items-center flex-row h-100 d-md-none"} />
        <ButtonLogout />
      </div>
    </header>
  );
}

export default Header;
