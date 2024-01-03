import { getAuth, onAuthStateChanged } from "firebase/auth";
import IndexContainer from "../../../components/IndexContainer";
import useReduxListMonths from "../../../hooks/updateReduxDatabase/useReduxListMonths";
import useReduxListUsers from "../../../hooks/updateReduxDatabase/useReduxListUsers";
import useReduxMonthData from "../../../hooks/updateReduxDatabase/useReduxMonthData";
import useRequestMonthPanel from "./useRequestMonthPanel";

const IndexMonthPanel = () => {
  // useReduxMonthData();
  // useReduxListUsers();
  // useReduxListMonths();


  const auth = getAuth();
  onAuthStateChanged(auth, user => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;

      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  const { requestState } = useRequestMonthPanel();

  return <IndexContainer>{requestState} </IndexContainer>;
};

export default IndexMonthPanel;
