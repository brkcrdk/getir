import { FC } from "react";
import styled from "styled-components";
import { Icon } from "components";
import theme from "theme";

interface RadioProps {
  checked?: boolean;
  label: string;
  id: string;
  radioType: string;
  onChange?: () => void;
}

const Radio: FC<RadioProps> = ({
  checked = false,
  id,
  label,
  radioType,
  onChange,
}) => {
  return (
    <RadioWrapper htmlFor={id} onChange={onChange}>
      <input type="radio" id={id} name={radioType} checked={checked} />
      {label}
      {checked && <Icon iconName="check" size={16} color={theme.colors.main} />}
    </RadioWrapper>
  );
};

export default Radio;

const RadioWrapper = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  cursor: pointer;
  input {
    margin: 0;
    margin-right: 12px;
    position: relative;
    width: 22px;
    height: 22px;
    appearance: none;
    background-color: #fff;
    font: inherit;
    color: currentColor;
    border: 0.15em solid ${(p) => p.theme.colors.main};
    border-radius: 50%;
  }
  .icon-check {
    position: absolute;
    left: 3px;
  }
`;
