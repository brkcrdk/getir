import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Icon } from "components";

const Basket = () => {
  const dispatch = useDispatch();

  return (
    <BasketWrapper onClick={() => dispatch({ type: "TOGGLE_SIDEBAR" })}>
      <Icon iconName="basket" size={24} />
      <span>₺ 34</span>
    </BasketWrapper>
  );
};

export default Basket;

// NOTE: this component should be button.
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
