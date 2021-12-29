import { FC } from "react";
import styled from "styled-components";

interface BadgeProps {
  label: string;
  onClick?: () => void;
  isActive?: boolean;
}

const Badge: FC<BadgeProps> = ({ label, onClick, isActive = false }) => {
  return (
    <BadgeWrapper isActive={isActive} onClick={onClick}>
      {label}
    </BadgeWrapper>
  );
};

export default Badge;

interface StyleProps {
  isActive: boolean;
}

const BadgeWrapper = styled.button<StyleProps>`
  border-radius: 2px;
  padding: 6px 16px;
  color: ${(p) => (p.isActive ? "#fff" : p.theme.colors.main)};
  background: ${(p) => p.theme.colors[p.isActive ? "main" : "chipBackground"]};
  font-weight: 600;
`;
