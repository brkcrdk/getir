import { useRef, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useOnClickOutside } from "usehooks-ts";
import { motion } from "framer-motion";
import { SidebarTypes } from "types";
import Backdrop from "./Backdrop";

interface StateProps {
  sidebarStore: SidebarTypes;
}

const Sidebar = () => {
  const { isOpen, sidebarContent, sidebarPosition } = useSelector(
    (s: StateProps) => s.sidebarStore
  );

  const dispatch = useDispatch();
  const wrapperRef = useRef(null);

  const closeSidebar = () => {
    if (isOpen) {
      dispatch({ type: "CLOSE_SIDEBAR" });
    }
  };

  useOnClickOutside(wrapperRef, closeSidebar);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("noScroll");
    } else {
      document.body.classList.remove("noScroll");
    }
  }, [isOpen]);

  return (
    <SidebarWrapper>
      <Backdrop isOpen={isOpen} />
      {sidebarPosition === "right" && (
        <SidebarContent
          initial={{ right: "-100%" }}
          animate={isOpen ? { right: 0 } : { right: "-100%" }}
          transition={{ type: "tween", duration: 0.5 }}
          ref={wrapperRef}
        >
          {sidebarContent}
        </SidebarContent>
      )}
      {sidebarPosition === "left" && (
        <SidebarContent
          initial={{ left: "-100%" }}
          animate={isOpen ? { left: 0 } : { left: "-100%" }}
          transition={{ type: "tween", duration: 0.5 }}
          ref={wrapperRef}
        >
          {sidebarContent}
        </SidebarContent>
      )}
    </SidebarWrapper>
  );
};

export default Sidebar;

const SidebarWrapper = styled.div``;

const SidebarContent = styled(motion.div)`
  position: fixed;
  top: 76px;
  background: #fff;
  min-width: 300px;
  z-index: 99;
  overflow: auto;
  height: calc(100vh - 76px);
`;
