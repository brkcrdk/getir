import styled from "styled-components";
import { motion } from "framer-motion";

const Backdrop = ({ isOpen = false }) => {
  const animationVariants = {
    display: {
      opacity: 1,
      display: "block",
    },
    hide: {
      opacity: 0,
      display: "none",
      transition: {
        opacity: { delay: 0.3 },
        display: { delay: 0.6 },
      },
    },
  };
  return (
    <StyledBackdrop
      variants={animationVariants}
      initial="hide"
      animate={isOpen ? "display" : "hide"}
    />
  );
};
export default Backdrop;

const StyledBackdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background: ${(p) => p.theme.colors.backdrop};
  z-index: 9;
`;
