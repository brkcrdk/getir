import styled from "styled-components";
import { Icon } from "components";

const Basket = () => {
  return (
    <BasketWrapper>
      <Icon iconName="basket" size={24} />
      <span>₺ 34</span>
    </BasketWrapper>
  );
};

export default Basket;

const BasketWrapper = styled.div`
  background: ${(p) => p.theme.colors.darkMain};
  color: #fff;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 26px;
  span {
    margin-left: 8px;
    font-weight: 600;
  }
`;
