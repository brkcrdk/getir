import { FC } from "react";
import styled from "styled-components";

interface IContainer {
  children: React.ReactNode;
}
const Container: FC<IContainer> = ({ children, ...props }) => {
  return <CustomContainer {...props}>{children}</CustomContainer>;
};
export default Container;

const CustomContainer = styled.div`
  max-width: 1232px;
  display: grid;
  margin: 0 auto;
`;
