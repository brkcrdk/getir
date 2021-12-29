import { FC } from "react";
import styled, { css } from "styled-components";
import { Icon } from "components";

interface PaginationProps {
  activePage: number;
  pageCount: number;
  handlePrev?: () => void;
  handleGoTo?: () => void;
  handleNext?: () => void;
}

const Pagination: FC<PaginationProps> = ({
  activePage = 1,
  pageCount = 2,
  handlePrev,
  handleGoTo,
  handleNext,
}) => {
  return (
    <PaginationWrapper data-testid="pagination">
      <PageItem
        className="prev"
        disabled={activePage === 1}
        onClick={handlePrev}
      >
        <Icon size={14} iconName="arrow-left" />
        Prev
      </PageItem>
      {[1, 2, 3].map((page) => (
        <PageItem
          className={activePage === page + 1 ? "active" : ""}
          key={`pagination-page-${page}`}
          // onClick={() => handleGoTo(page + 1)}
        >
          {page + 1}
        </PageItem>
      ))}
      <PageItem
        className="next"
        disabled={activePage === pageCount}
        onClick={handleNext}
      >
        Next
        <Icon size={14} iconName="arrow-right" />
      </PageItem>
    </PaginationWrapper>
  );
};

export default Pagination;

interface StyleProps {
  disabled?: boolean;
}

const PaginationWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PageItem = styled.li<StyleProps>`
  display: flex;
  align-items: center;
  color: ${(p) => p.theme.colors.grayScale.gray500};
  font-weight: 600;
  padding: 12px;
  &.active {
    background: ${(p) => p.theme.colors.main};
    border-radius: 2px;
    color: #fff;
    &:hover {
      color: #fff;
    }
  }
  &:hover {
    color: ${(p) => p.theme.colors.main};
    cursor: pointer;
  }
  &.prev {
    margin-right: 60px;
    .icon-arrow-left {
      margin-right: 12px;
    }
  }
  &.next {
    margin-left: 60px;
    .icon-arrow-right {
      margin-left: 12px;
    }
  }
  ${(p) =>
    p.disabled &&
    css`
      pointer-events: none;
      opacity: 0.7;
    `}
`;
