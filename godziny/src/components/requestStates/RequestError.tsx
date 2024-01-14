
type Props = {
  styles: (contentJSX: React.ReactNode) => JSX.Element;
};


const RequestError = (props:Props) => {
  return (
    <>
      {props.styles(
        <div className="text-danger fs-1 text-center">
          Błąd. Odśwież stronę
        </div>
      )}
    </>
  );
};

export default RequestError;
