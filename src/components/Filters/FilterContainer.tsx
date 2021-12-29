import { FC } from "react";
import styled from "styled-components";

interface FilterProps {
  children: React.ReactNode;
  title: string;
}

const FilterContainer: FC<FilterProps> = ({ children, title, ...props }) => {
  return (
    <FilterContainerWrapper {...props}>
      <Title>{title}</Title>
      <FilterContent>{children}</FilterContent>
    </FilterContainerWrapper>
  );
};

export default FilterContainer;

const FilterContainerWrapper = styled.form`
  width: 100%;
`;

const Title = styled.legend`
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  margin-bottom: 12px;
`;

const FilterContent = styled.fieldset`
  background: #fff;
  border: none;
  box-shadow: rgb(93 62 188 / 4%) 0px 6px 24px;
  border-radius: 2px;
  padding: 24px;
  display: grid;
  row-gap: 18px;
`;
