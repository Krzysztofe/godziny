import { useUsersQuery } from "../../../services/apiSliceUsers";
import useHTTPIndexSettings from "./useHTTPIndexSettings";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import Container from "react-bootstrap/Container";
import useWindowWidth from "../../../hooks/useWindowWidth";

const IndexSettings = () => {
  const { settingsContent } = useHTTPIndexSettings();
  const { users, usersError, usersIsLoading } = useSelector(
    (state: RootState) => state.users
  );
  const { infoMonths, infoMonthsError, infoMonthsIsLoading } = useSelector(
    (state: RootState) => state.infoMonths
  );

    const { windowWidth } = useWindowWidth();

 
  // const cc = true;
  // let mainStyles = "bg-primary-subtle";

  // if ((infoMonthsIsLoading && !infoMonths) || (usersIsLoading && !users)) {
  //   mainStyles = "d-flex align-items-center justify-content-center vh-100";
  // }

  // if (
  //   !infoMonths ||
  //   infoMonthsError ||
  //   infoMonthsIsLoading ||
  //   !users ||
  //   usersError ||
  //   usersIsLoading
  // ) {
  //   mainStyles =
  //     "d-flex justify-content-end align-items-center p-1 pe-sm-5 col-sm-7 col-md-8 ms-auto mx-xxl-auto";
  // }

  return (
    <main className="backgroundImage" style={{ height: "100vh" }}>
      <Container
        className="d-flex align-items-center flex-column  pe-0 overflow-y-scroll"
        style={{
          maxHeight:
            windowWidth > 576 ? "100vh" : "calc(100vh - 40px)",
        }}
      >
        {settingsContent}
      </Container>
    </main>
  );
};

export default IndexSettings;
