import styled from "styled-components";
import { Container, Header } from "components";

function App() {
  return (
    <>
      <Header />
    </>
  );
}

export default App;

const Test = styled.p`
  color: ${(p) => p.theme.colors.main};
`;

const TestDiv = styled.div`
  width: 200px;
  height: 200px;
  box-shadow: rgb(93 62 188 / 4%) 0px 6px 24px;
  background: #fff;
`;
