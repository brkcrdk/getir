import styled from "styled-components";
import BasketItem from "./BasketItem";

const Basket = () => {
  return (
    <BasketWrapper>
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

const BasketWrapper = styled.div`
  width: 100%;
  max-width: 296px;
  position: sticky;
  top: 48px;
  border-radius: 2px;
  padding: 8px;
  height: 100%;
  background: ${(p) => p.theme.colors.main};
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
