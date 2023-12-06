import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { printPanelContent } from "../../../utils/printPanelContent";
import SettinsContent from "./SettinsContent";

const useRequestSettings = () => {
  const {users, usersError, usersIsLoading } = useSelector(
    (state: RootState) => state.users
  );
  const { listMonths, listMonthsError, listMonthsIsLoading } = useSelector(
    (state: RootState) => state.listMonths
  );

  let requestState;

  if (usersIsLoading || listMonthsIsLoading) {
    requestState = printPanelContent(
      <Spinner animation="border" variant="secondary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else if (usersError) {
    if ("status" in usersError) {
      const errMsg = "status" in usersError && usersError.status;

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
  } else  {
    requestState = <SettinsContent />;
  }

  return { requestState };
};
export default useRequestSettings;
