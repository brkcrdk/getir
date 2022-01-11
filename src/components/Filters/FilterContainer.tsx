import { FC, ReactNode } from "react";
import styled from "styled-components";
import { Input } from "components";

interface FilterProps {
  children: ReactNode;
  title: string;
  searchable?: boolean;
  searchPlaceholder?: string;
  onSearch?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterContainer: FC<FilterProps> = ({
  children,
  title,
  searchable = false,
  searchPlaceholder = "Placeholder",
  onSearch,
  ...props
}) => {
  return (
    <FilterContainerWrapper searchable={searchable} {...props}>
      <Title>{title}</Title>
      <FilterTest searchable={searchable}>
        {searchable && (
          <Input
            className="search-input"
            placeholder={searchPlaceholder}
            onChange={onSearch}
          />
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

const FilterContainerWrapper = styled.form<StyleProps>`
  width: 100%;
`;

const Title = styled.legend`
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  margin-bottom: 12px;
`;

const FilterTest = styled.div<StyleProps>`
  border-radius: 2px;
  padding-bottom: ${(p) => p.searchable && "24px"};
  background: #fff;
  box-shadow: ${(p) => p.theme.colors.boxShadows.filterContainer};
  min-height: ${(p) => (p.searchable ? "320px" : "initial")};

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
