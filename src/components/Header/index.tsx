import styled from "styled-components";
import { Container } from "components";
import Basket from "./Basket";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <div />
        <img src="/Logo.svg" alt="logo" />
        <Basket />
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  background: ${(p) => p.theme.colors.main};
`;

const HeaderContent = styled(Container)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 76px;
  img {
    height: 40px;
  }
`;
