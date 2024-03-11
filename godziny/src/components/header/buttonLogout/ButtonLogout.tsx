import { memo } from "react";
import Button from "react-bootstrap/Button";
import useBtnContent from "../../../hooks/useBtnContent";
import AlertErrors from "../../AlertErrors";
import IconLogout from "./iconLogout/IconLogout";
import useLogout from "./useLogout";

const ButtonLogout = memo(() => {
  const { isLoading, logout } = useLogout();
  const { btnContent } = useBtnContent(isLoading, <IconLogout />);


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
});

export default ButtonLogout;
