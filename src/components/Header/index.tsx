import styled from "styled-components";
import { Container } from "components";
import BasketButton from "./BasketButton";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <div />
        <img src="/Logo.svg" alt="logo" />
        <BasketButton />
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  background: ${(p) => p.theme.colors.main};
  position: sticky;
  top: 0;
  z-index: 999;
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
