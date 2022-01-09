import { useRef, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

interface StateProps {
  sidebarStore: {
    isOpen: boolean;
  };
}

const Sidebar = () => {
  const { isOpen } = useSelector((s: StateProps) => s.sidebarStore);
  const dispatch = useDispatch();

  return (
    <SidebarWrapper>
      <Backdrop isOpen={isOpen} />
      <SidebarContent>cc</SidebarContent>
    </SidebarWrapper>
  );
};

export default Sidebar;

interface StyleProps {
  isOpen?: boolean;
}

const SidebarWrapper = styled.div``;

const Backdrop = styled.div<StyleProps>`
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  inset: 0;
`;

const SidebarContent = styled.div`
  position: fixed;
  top: 76px;
  right: 0;
  background: #fff;
  height: 100%;
  z-index: 99;
`;
