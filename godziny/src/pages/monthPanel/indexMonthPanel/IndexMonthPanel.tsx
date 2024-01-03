import { useSelector } from "react-redux";
import IndexContainer from "../../../components/IndexContainer";
import useReduxMonthData from "../../../hooks/updateReduxDatabase/useReduxMonthData";
import { RootState } from "../../../redux/store";
import EmptyMonthRecord from "../EmptyMonthRecord";
import RequestError from "../RequestError";
import RequestLoading from "../RequestLoading";
import MonthPanelContent from "./MonthPanelContent";

const IndexMonthPanel = () => {
  useReduxMonthData();

  const { month, monthErrorGet, monthIsLoading } = useSelector(
    (state: RootState) => state.monthPanel
  );
  const { listUsersError, listUsersIsLoading } = useSelector(
    (state: RootState) => state.listUsers
  );
  const { listMonthsError } = useSelector(
    (state: RootState) => state.listMonths
  );

  let content;

  if (monthIsLoading || listUsersIsLoading) {
    content = <RequestLoading />;
  } else if (monthErrorGet || listUsersError || listMonthsError) {
    content = <RequestError />;
  } else if (!month || month?.id === "") {
    content = <EmptyMonthRecord />;
  } else {
    content = <MonthPanelContent />;
  }

  return (
    <>
      <IndexContainer>{content}</IndexContainer>
    </>
  );
};

export default IndexMonthPanel;

// const auth = getAuth();
// onAuthStateChanged(auth, user => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     const uid = user.uid;

//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });
