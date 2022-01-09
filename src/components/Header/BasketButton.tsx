import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Icon, Basket } from "components";
import { device } from "theme";
import { useMediaQuery } from "usehooks-ts";

const BasketButton = () => {
  const dispatch = useDispatch();
  const isDesktop = useMediaQuery(device.desktop);

  useEffect(() => {
    if (!isDesktop) {
      dispatch({ type: "CLOSE_SIDEBAR" });
    }
  }, [isDesktop]);

  return (
    <BasketWrapper
      onClick={() =>
        dispatch({
          type: "TOGGLE_SIDEBAR",
          payload: {
            sidebarContent: <Basket sidebarBasket />,
          },
        })
      }
    >
      <Icon iconName="basket" size={24} />
      <span>₺ 34</span>
    </BasketWrapper>
  );
};

export default BasketButton;

const BasketWrapper = styled.button`
  background: ${(p) => p.theme.colors.darkMain};
  color: #fff;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 26px;
  pointer-events: none;
  span {
    margin-left: 8px;
    font-weight: 600;
    font-size: 14px;
  }
  @media ${device.desktop} {
    pointer-events: all;
  }
`;
