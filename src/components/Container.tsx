import { FC } from "react";
import styled from "styled-components";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children, ...props }) => {
  return <ContainerWrapper {...props}>{children}</ContainerWrapper>;
};
export default Container;

const ContainerWrapper = styled.div`
  max-width: 1232px;
  display: grid;
  margin: 0 auto;
`;
