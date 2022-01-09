import { useState } from "react";
import styled from "styled-components";
import { device } from "theme";

import BasketItem from "./BasketItem";

const Basket = () => {
  const [isHidden, setHidden] = useState(true);

  return (
    <BasketWrapper isHidden={true}>
      <ContentWrapper>
        <BasketItem />
        <BasketItem />
        <BasketItem />
        <Total>₺39.97</Total>
      </ContentWrapper>
    </BasketWrapper>
  );
};
export default Basket;

interface StyleProps {
  isHidden: boolean;
}

const BasketWrapper = styled.div<StyleProps>`
  width: 100%;
  max-width: 296px;
  position: sticky;
  top: 124px; /* Header height(76px) + margin(48px) */
  border-radius: 2px;
  padding: 8px;
  height: 100%;
  background: ${(p) => p.theme.colors.main};
  @media ${device.desktop} {
    position: fixed;
    right: ${(p) => (p.isHidden ? 0 : "-300px")};
    height: 100%;
    top: 76px;
    background: #fff;
  }
`;

const ContentWrapper = styled.div`
  background: #fff;
  border-radius: 2px;
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

const Total = styled.button`
  border: 2px solid ${(p) => p.theme.colors.main};
  border-radius: 2px;
  padding: 18px 24px;
  margin-top: 16px;
  align-self: flex-end;
  max-width: 90px;
  cursor: default;
  color: ${(p) => p.theme.colors.main};
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
`;
