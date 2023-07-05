import Swal from "sweetalert2";
import { useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { ReactNode } from "react";

const useHTTPState = (success: any, btnText: string | ReactNode) => {

// console.log('',success.isError)

  useEffect(() => {
    if (success.isError) {
      const error = success.error;
      const errMsg = error && "status" in error && error.status && error.status;

      Swal.fire({
        title: `Błąd: ${errMsg || ""}`,
        confirmButtonColor: "rgb(31, 180, 255)",
      });
    }
  }, [success.isError]);

  let btnContent: string | ReactNode = btnText;

  if (success.isLoading) {
    btnContent = (
      <Spinner animation="border" size="sm" variant="secondary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return { btnContent };
};

export default useHTTPState;
