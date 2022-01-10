import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "usehooks-ts";
import { Icon, Basket } from "components";
import { device } from "theme";
import { SidebarTypes, actionTypes } from "types";

interface StateProps {
  sidebarStore: SidebarTypes;
}

const BasketButton = () => {
  const { isOpen } = useSelector((s: StateProps) => s.sidebarStore);
  const dispatch = useDispatch();
  const isDesktop = useMediaQuery(device.desktop);

  useEffect(() => {
    if (!isDesktop) {
      dispatch({ type: actionTypes.sidebarStore.CLOSE_SIDEBAR });
    }
  }, [isDesktop]);

  const toggleSidebar = () =>
    dispatch({
      type: actionTypes.sidebarStore.OPEN_SIDEBAR,
      payload: {
        sidebarContent: <Basket sidebarBasket />,
        sidebarPosition: "right",
      },
    });

  return (
    <BasketWrapper onClick={toggleSidebar} isSidebarOpen={isOpen}>
      <Icon iconName="basket" size={24} />
      <span>₺ 34</span>
    </BasketWrapper>
  );
};

export default BasketButton;

interface StyleProps {
  isSidebarOpen: boolean;
}
const BasketWrapper = styled.button<StyleProps>`
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
    pointer-events: ${(p) => (p.isSidebarOpen ? "none" : "all")};
  }
`;
