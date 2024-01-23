import Button from "react-bootstrap/Button";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../data/firebaseConfig";
import useBtnContent from "../../../hooks/useBtnContent";
import useIsPath from "../../../hooks/useIsPath";
import AlertErrors from "../../AlertErrors";
import IconLogout from "./iconLogout/IconLogout";
import useLogout from "./useLogout";

const ButtonLogout = () => {
  const { isLoading, logout } = useLogout();
  const { btnContent } = useBtnContent(isLoading, <IconLogout />);
  const [user] = useAuthState(auth);
  const { isPath } = useIsPath(["ustawienia", "202"]);

  if (!user || !isPath) return null;

  return (
    <>
      <AlertErrors />
      <Button
        onClick={logout}
        className={`bg-transparent border-0 p-0 ms-2 me-3`}
        disabled={isLoading}
      >
        {btnContent}
      </Button>
    </>
  );
};

export default ButtonLogout;
