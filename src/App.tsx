import styled from "styled-components";
import { Container } from "components";

function App() {
  return (
    <Container>
      <Test>deneme</Test>
    </Container>
  );
}

export default App;

const Test = styled.p`
  color: ${(p) => p.theme.colors.main};
`;
