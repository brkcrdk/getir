import styled from "styled-components";

const Input = ({ ...props }) => {
  return <StyledInput {...props} />;
};

export default Input;

const StyledInput = styled.input`
  padding: 12px 16px;
  border: 2px solid ${(p) => p.theme.colors.blackScale.black100};
  border-radius: 2px;
  color: ${(p) => p.theme.colors.blackScale.black300};
  font-size: 14px;
  width: 100%;
`;
