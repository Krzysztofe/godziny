import { useAuthState } from "react-firebase-hooks/auth";
import IndexContainer from "../../../components/IndexContainer";
import useReduxListMonths from "../../../hooks/updateReduxDatabase/useReduxListMonths";
import useReduxListUsers from "../../../hooks/updateReduxDatabase/useReduxListUsers";
import useReduxMonthData from "../../../hooks/updateReduxDatabase/useReduxMonthData";
import useRequestMonthPanel from "./useRequestMonthPanel";
import { auth } from "../../../data/firebaseConfig";

const IndexMonthPanel = () => {
  useReduxMonthData();
    useReduxListUsers();
    useReduxListMonths();
  const [user] = useAuthState(auth);



  const { requestState } = useRequestMonthPanel();
  useReduxMonthData()

  // console.log("", auth.currentUser?.reloadUserInfo);

  return <IndexContainer>{requestState} </IndexContainer>;

    // return <IndexContainer> uuuu </IndexContainer>;
};

export default IndexMonthPanel;
