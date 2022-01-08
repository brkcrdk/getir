import { FC } from "react";
import styled from "styled-components";
import { Icon } from "components";

interface CheckboxProps {
  checked?: boolean;
  label: string;
  id: string;
  checkboxType: string;
  onChange?: () => void;
}

const Checkbox: FC<CheckboxProps> = ({
  checked = false,
  id,
  label,
  checkboxType,
  onChange,
}) => {
  return (
    <CheckboxWrapper htmlFor={id} onChange={onChange}>
      <input type="checkbox" id={id} name={checkboxType} checked={checked} />
      <span>{label}</span>
      {checked && <Icon iconName="check" size={16} color="#fff" />}
    </CheckboxWrapper>
  );
};

export default Checkbox;

const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  input {
    margin: 0;
    margin-right: 12px;
    box-shadow: ${(p) => p.theme.colors.boxShadows.checkbox};
    position: relative;
    width: 22px;
    height: 22px;
    appearance: none;
    background: #fff;
    font: inherit;
    border-radius: 2px;
    &:checked {
      background: ${(p) => p.theme.colors.main};
    }
  }
  span {
    white-space: pre-line;
    width: 85%;
  }
  .icon-check {
    position: absolute;
    left: 3px;
  }
`;
