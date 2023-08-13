import Container from "react-bootstrap/Container";
import "../../../scss/utilsClasses/_bgImage.scss";
import useHTTPIndexMonthPanel from "./useHTTPIndexMonthPanel";

const IndexMonthPanel = () => {
  const { panelContent } = useHTTPIndexMonthPanel();

  return (
    <main>
      <Container
        className=" d-flex align-items-center flex-column backgroundImage"
        style={{ height: "100vh" }}
      >
        {panelContent}
      </Container>
    </main>
  );
};

export default IndexMonthPanel;
