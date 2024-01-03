import { printPanelLoadingContent } from "../../utils/printPanelContent";

const RequestError = () => {
  return (
    <>
      {printPanelLoadingContent(
        <div className="text-danger text-center fs-4 ">
          Błąd. Odśwież stronę
        </div>
      )}
    </>
  );
};

export default RequestError;
