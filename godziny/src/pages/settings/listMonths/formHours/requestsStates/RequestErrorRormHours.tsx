import { printFormHoursContent } from "./utilsPrintContent";

const RequestErrorRormHours = () => {
  return (
    <>
      {printFormHoursContent(
        <div className="text-danger fs-6 ">Błąd. Odśwież stronę</div>
      )}
    </>
  );
};

export default RequestErrorRormHours;
