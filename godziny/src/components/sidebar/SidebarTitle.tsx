
import { useNavigate } from "react-router-dom";
import { auth } from "../../data/firebaseConfig";

const SidebarTitle = () => {
  const navigate = useNavigate();

  const logout = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <div
      onClick={logout}
      className="fw-bolder text-info-emphasis"
      style={{
        cursor: "pointer",
        fontSize: "0.8rem",
      }}
    >
      Wyloguj
    </div>
  );
};

export default SidebarTitle;
