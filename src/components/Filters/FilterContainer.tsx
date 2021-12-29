import { FC } from "react";
import styled from "styled-components";

interface FilterProps {
  children: React.ReactNode;
  title: string;
}

const FilterContainer: FC<FilterProps> = ({ children, title, ...props }) => {
  return (
    <FilterContainerWrapper>
      <Title>{title}</Title>
      <FilterContent>{children}</FilterContent>
    </FilterContainerWrapper>
  );
};

export default FilterContainer;

const FilterContainerWrapper = styled.div``;

const Title = styled.h4`
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  margin-bottom: 12px;
`;
const FilterContent = styled.div`
  background: #fff;
  box-shadow: rgb(93 62 188 / 4%) 0px 6px 24px;
  border-radius: 2px;
  padding: 24px;
`;
