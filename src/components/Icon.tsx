import { FC } from "react";
import styled from "styled-components";

type iconNames =
  | "filter"
  | "clear"
  | "plus"
  | "minus"
  | "check"
  | "arrow-left"
  | "arrow-right"
  | "basket";

interface IconProps {
  iconName: iconNames;
  size?: number;
  color?: string;
}
const Icon: FC<IconProps> = ({ iconName, size = 20, color, ...props }) => {
  return (
    <IconWrapper
      className={`icon icon-${iconName}`}
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
