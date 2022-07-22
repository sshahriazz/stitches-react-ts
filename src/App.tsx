import { Box } from "blocks/box";
import Container from "blocks/container";
import Trash1 from "components/trash/Trash1";

function App() {
  return (
    <Container>
      <Box css={{ color: "$accents9" }}>Hello</Box>
      <Trash1 />
    </Container>
  );
}

export default App;
