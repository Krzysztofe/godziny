import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { printPanelContent } from "../../../utils/printPanelContent";
import SettinsContent from "./SettinsContent";

const useRequestSettings = () => {
  const { usersError, usersIsLoading } = useSelector(
    (state: RootState) => state.users
  );
  const { infoMonthsError, infoMonthsIsLoading } = useSelector(
    (state: RootState) => state.infoMonths
  );


  let requestState;

  if (usersIsLoading || infoMonthsIsLoading) {
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
          <> Błąd: {errMsg} </>
        </h3>
      );
    }
  } else if (infoMonthsError) {
    if ("status" in infoMonthsError) {
      const errMsg = "status" in infoMonthsError && infoMonthsError.status;

      requestState = printPanelContent(
        <h3 className="text-danger mx-auto ">
          <> Błąd: {errMsg} </>
        </h3>
      );
    }
  } else {
    requestState = <SettinsContent />;
  }

  return { requestState };
};
export default useRequestSettings;
