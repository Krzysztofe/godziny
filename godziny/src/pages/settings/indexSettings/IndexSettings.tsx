import Container from "react-bootstrap/Container";
import useWindowWidth from "../../../hooks/useWindowWidth";
import useHTTPIndexSettings from "./useHTTPIndexSettings";

const IndexSettings = () => {
  const { settingsContent } = useHTTPIndexSettings();
  const { windowWidth } = useWindowWidth();

  return (
    <main className="backgroundImage" style={{ height: "100dvh" }}>
      <Container
        className="d-flex align-items-center flex-column pe-0 overflow-y-scroll"
        style={{
          height: windowWidth > 576 ? "100vh" : "calc(100vh - 40px)",
        }}
      >
        {settingsContent}
      </Container>
    </main>
  );
};

export default IndexSettings;
