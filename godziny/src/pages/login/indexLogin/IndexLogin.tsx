import AlertErrors from "../../../components/AlertErrors";
import FormLoginContext from "../formLoginContext/FormLoginContext";
import "./_indexLogin.scss"

const IndexLogin = () => {
  return (
    <main className="_d-center bg-primary-light  _indexLogin">
      <AlertErrors />
      <FormLoginContext />
    </main>
  );
};

export default IndexLogin;
