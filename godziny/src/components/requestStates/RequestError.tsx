import { printContentContainer } from "./utilsPrintContent";

const RequestError = () => {
  return (
    <>
      {printContentContainer(
        <div className="text-danger text-center fs-4 ">
          Błąd. Odśwież stronę
        </div>
      )}
    </>
  );
};

export default RequestError;
