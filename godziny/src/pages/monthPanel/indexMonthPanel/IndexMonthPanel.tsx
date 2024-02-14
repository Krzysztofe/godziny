import { useSelector } from "react-redux";
import IndexContainer from "../../../components/indexContainer/IndexContainer";
import RequestError from "../../../components/requestStates/RequestError";
import RequestLoading from "../../../components/requestStates/RequestLoading";
import useMonthQuery from "../../../hooks/useMonthQuery";
import { RootState } from "../../../redux/store";
import { useUsersQuery } from "../../../services/apiSliceUsers";
import { requestContainer } from "../../../utils/utilsRequestContainer";
import MonthPanelContent from "../monthPanelContent/MonthPanelContent";
import MonthPanelEmpty from "../monthPanelEmpty/MonthPanelEmpty";

const IndexMonthPanel = () => {
  const {
    data: month,
    error: monthErrorGet,
    isLoading: monthIsLoading,
  } = useMonthQuery();

  const { error: listUsersError, isLoading: listUsersIsLoading } =
    useUsersQuery();

  const { listMonthsError } = useSelector(
    (state: RootState) => state.listMonths
  );

  let content;

  if (monthIsLoading || listUsersIsLoading) {
    content = <RequestLoading styles={requestContainer} />;
  } else if (monthErrorGet || listUsersError || listMonthsError) {
    content = <RequestError styles={requestContainer} />;
  } else if (!month || month?.id === "") {
    content = <MonthPanelEmpty />;
  } else {
    content = <MonthPanelContent />;
  }

  return <IndexContainer>{content}</IndexContainer>;
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
