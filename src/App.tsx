import { Header, Container, Filters, Basket, Products } from "components";
import styled from "styled-components";

function App() {
  return (
    <>
      <Header />
      <MainContainer>
        <Filters />
        <Products />
        <Basket />
      </MainContainer>
    </>
  );
}

export default App;

const MainContainer = styled(Container)`
  margin-top: 38px;
  margin-bottom: 100px;
  display: flex;
`;
