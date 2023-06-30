import useSidebarMonthFormik from "./useSidebarMonthFormik";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Spinner } from "react-bootstrap";

const useRequestSidebarMonth = () => {
  const { formik, success } = useSidebarMonthFormik();

  let btnContent;

  if (success.isLoading) {
    btnContent = (
      <Spinner
        animation="border"
        variant="primary"
        style={{ height: "1.5rem", width: "1.5rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else if (success.isError) {
    btnContent = <span className="text-danger"> Błąd </span>;
  } else {
    btnContent = <AiOutlinePlusCircle style={{ fontSize: "1.5rem" }} />;
  }




  return { formik, success, btnContent };
};

export default useRequestSidebarMonth;
