import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { Spinner } from "react-bootstrap";
import FormHoursContext from "./FormHoursContext";


  const printFormHoursContent = (contentJSX: React.ReactNode) => (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "88px" }}
    >
      {contentJSX}
    </div>
  );



const useRequestFormHours = (idx: number) => {
  const { calcHoursIsLoading, calcHoursError } = useSelector(
    (state: RootState) => state.calcHours
  );

  let requestState;

  if (calcHoursIsLoading) {
    requestState = printFormHoursContent(
      <Spinner animation="border" variant="secondary" className="fs-6">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else if (calcHoursError) {
    requestState = printFormHoursContent(
      <div className="text-danger fs-6 ">Błąd. Odśwież stronę</div>
    );
  } else {
    requestState = <FormHoursContext idx={idx} />;
  }

  return { requestState };
};

export default useRequestFormHours;
