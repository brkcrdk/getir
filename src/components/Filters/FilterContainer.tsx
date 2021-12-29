import { FC } from "react";
import styled from "styled-components";
import { Input } from "components";
interface FilterProps {
  children: React.ReactNode;
  title: string;
  searchable?: boolean;
  searchPlaceholder?: string;
}

const FilterContainer: FC<FilterProps> = ({
  children,
  title,
  searchable = false,
  searchPlaceholder = "Placeholder",
  ...props
}) => {
  return (
    <FilterContainerWrapper {...props}>
      <Title>{title}</Title>
      <FilterTest searchable={searchable}>
        {searchable && (
          <Input className="search-input" placeholder={searchPlaceholder} />
        )}
        <FilterContent searchable={searchable}>{children}</FilterContent>
      </FilterTest>
    </FilterContainerWrapper>
  );
};

export default FilterContainer;

interface StyleProps {
  searchable: boolean;
}

const FilterContainerWrapper = styled.form`
  width: 100%;
`;

const Title = styled.legend`
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  margin-bottom: 12px;
`;

const FilterTest = styled.div<StyleProps>`
  background: #fff;
  box-shadow: ${(p) => p.theme.colors.boxShadows.filterContainer};
  border-radius: 2px;
  padding-bottom: ${(p) => p.searchable && "24px"};
  .search-input {
    width: calc(100% - 48px);
    margin: 24px 0 12px 24px;
  }
`;

const FilterContent = styled.fieldset<StyleProps>`
  display: grid;
  row-gap: 18px;
  border: none;
  margin-top: ${(p) => p.searchable && "12px"};
  max-height: 200px;
  overflow-y: auto;
  padding: ${(p) => (p.searchable ? "4px 24px" : " 24px")};
`;
