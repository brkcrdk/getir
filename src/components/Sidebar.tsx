import { useRef, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { SidebarTypes } from "types";
import { useOnClickOutside } from "usehooks-ts";

interface StateProps {
  sidebarStore: SidebarTypes;
}

const Sidebar = () => {
  const { isOpen, sidebarContent } = useSelector(
    (s: StateProps) => s.sidebarStore
  );
  const dispatch = useDispatch();
  const wrapperRef = useRef(null);
  const closeSidebar = () => dispatch({ type: "CLOSE_SIDEBAR" });

  useOnClickOutside(wrapperRef, closeSidebar);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }, [isOpen]);

  return (
    <SidebarWrapper>
      <Backdrop isOpen={isOpen} />
      {
        <SidebarContent ref={wrapperRef} isOpen={isOpen}>
          {sidebarContent}
        </SidebarContent>
      }
    </SidebarWrapper>
  );
};

export default Sidebar;

interface StyleProps {
  isOpen: boolean;
}

const SidebarWrapper = styled.div``;

const Backdrop = styled.div<StyleProps>`
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  inset: 0;
  display: ${(p) => (p.isOpen ? "initial" : "none")};
`;

const SidebarContent = styled.div<StyleProps>`
  position: fixed;
  top: 76px;
  right: ${(p) => (p.isOpen ? 0 : "-100%")};
  background: #fff;
  min-width: 300px;
  z-index: 99;
  transition: all 0.5s ease-in-out;
  overflow: auto;
  height: calc(100vh - 76px);
`;
