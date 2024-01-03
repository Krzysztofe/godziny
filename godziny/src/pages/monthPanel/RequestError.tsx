import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { printPanelLoadingContent } from "../../utils/printPanelContent";
import { Spinner } from "react-bootstrap";

const RequestError = () => {
  const { month, monthErrorGet, monthIsLoading } = useSelector(
    (state: RootState) => state.monthPanel
  );
  const { listUsersError, listUsersIsLoading } = useSelector(
    (state: RootState) => state.listUsers
  );
  const { listMonthsError } = useSelector(
    (state: RootState) => state.listMonths
  );

  console.log('gggggggg',)

  if (monthErrorGet || listUsersError || listMonthsError) {
    return (
      <>
        {printPanelLoadingContent(
          <div className="text-danger text-center fs-4 ">
            Błąd. Odśwież stronę
          </div>
        )}
      </>
    );
  } else return null;
};

export default RequestError;
