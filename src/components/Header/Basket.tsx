import styled from "styled-components";
import { Icon } from "components";

const Basket = () => {
  return (
    <BasketContainer>
      <Icon iconName="basket" size={24} />
      <span>₺ 34</span>
    </BasketContainer>
  );
};

export default Basket;

const BasketContainer = styled.div`
  background: ${(p) => p.theme.colors.darkMain};
  color: #fff;
  display: flex;
  height: 100%;
  padding: 0 26px;
  span {
    margin-left: 8px;
    font-weight: 600;
  }
`;
