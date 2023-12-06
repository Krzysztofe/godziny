import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { printPanelContent } from "../../../utils/printPanelContent";
import SettinsContent from "./SettinsContent";

const useRequestSettings = () => {
  const { listUsersError, listUsersIsLoading } = useSelector(
    (state: RootState) => state.listUsers
  );
  const { listMonthsError, listMonthsIsLoading } = useSelector(
    (state: RootState) => state.listMonths
  );

  let requestState;

  if (listUsersIsLoading || listMonthsIsLoading) {
    requestState = printPanelContent(
      <Spinner animation="border" variant="secondary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else if (listUsersError) {
    if ("status" in listUsersError) {
      const errMsg = "status" in listUsersError && listUsersError.status;

      requestState = printPanelContent(
        <h3 className="text-danger mx-auto ">
          <> Błąd: {errMsg}</> <br />
          <>Odśwież stronę</>
        </h3>
      );
    }
  } else if (listMonthsError) {
    if ("status" in listMonthsError) {
      const errMsg = "status" in listMonthsError && listMonthsError.status;

      requestState = printPanelContent(
        <h3 className="text-danger mx-auto ">
          <> Błąd: {errMsg}</> <br />
          <>Odśwież stronę</>
        </h3>
      );
    }
  } else {
    requestState = <SettinsContent />;
  }

  return { requestState };
};
export default useRequestSettings;
