import { FC } from "react";
import styled from "styled-components";

interface IconProps {
  iconName: string;
  size?: number;
  color?: string;
}
const Icon: FC<IconProps> = ({ iconName, size = 20, color, ...props }) => {
  return (
    <IconWrapper
      className={`icon icon-basket`}
      size={size}
      color={color}
      {...props}
    />
  );
};
export default Icon;

interface StyleProps {
  size: number;
  color?: string;
}
const IconWrapper = styled.i<StyleProps>`
  font-size: ${(p) => `${p.size}px`};
  color: ${(p) => p.color};
`;
