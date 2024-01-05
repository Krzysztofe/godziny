import AlertErrors from "../../components/AlertErrors";
import FormLoginContext from "./formLoginContext/FormLoginContext";

const IndexLogin = () => {
  return (
    <main className="backgroundImage d-center vh-100 vw-100">
      <AlertErrors />
      <FormLoginContext />
    </main>
  );
};

export default IndexLogin;
