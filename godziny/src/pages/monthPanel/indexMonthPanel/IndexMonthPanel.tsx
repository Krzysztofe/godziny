import { useAuthState } from "react-firebase-hooks/auth";
import IndexContainer from "../../../components/IndexContainer";
import useReduxListMonths from "../../../hooks/updateReduxDatabase/useReduxListMonths";
import useReduxListUsers from "../../../hooks/updateReduxDatabase/useReduxListUsers";
import useReduxMonthData from "../../../hooks/updateReduxDatabase/useReduxMonthData";
import useRequestMonthPanel from "./useRequestMonthPanel";
import { auth } from "../../../data/firebaseConfig";
  import { getAuth, onAuthStateChanged } from "firebase/auth";

const IndexMonthPanel = () => {
  useReduxMonthData();
    useReduxListUsers();
    useReduxListMonths();
  // const [user] = useAuthState(auth);


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
  useReduxMonthData()

  // console.log("", auth.currentUser?.reloadUserInfo);

  return <IndexContainer>{requestState} </IndexContainer>;

    // return <IndexContainer> uuuu </IndexContainer>;
};

export default IndexMonthPanel;
