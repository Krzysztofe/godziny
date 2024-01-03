import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { printPanelLoadingContent } from "../../../utils/printPanelContent";
import SettinsContent from "./SettinsContent";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUpdateMonthError } from "../../../redux/storeFeatures/monthPanelSlice";

const useRequestSettings = () => {
  const dispatch = useDispatch();

  const { listUsersError, listUsersIsLoading } = useSelector(
    (state: RootState) => state.listUsers
  );
  const { listMonthsError } = useSelector(
    (state: RootState) => state.listMonths
  );

  const { updateMonthError } = useSelector(
    (state: RootState) => state.monthPanel
  );



  let requestState;

  if (listUsersIsLoading) {
    requestState = printPanelLoadingContent(
      <Spinner animation="border" variant="secondary" className="fs-6">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else if (updateMonthError || listMonthsError || listUsersError) {
    requestState = printPanelLoadingContent(
      <div className="text-danger text-center fs-4 ">Błąd. Odśwież stronę</div>
    );
  } else {
    requestState = <SettinsContent />;
  }

  return { requestState };
};
export default useRequestSettings;
