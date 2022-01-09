import { FC } from "react";
import styled from "styled-components";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import { useMediaQuery } from "usehooks-ts";

import { Icon } from "components";
import { device } from "theme";

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
  const isTablet = useMediaQuery(device.tablet);

  return (
    <CustomPaginate
      pageCount={pageCount}
      pageRangeDisplayed={isTablet ? 0 : 2}
      marginPagesDisplayed={isTablet ? 0 : 2}
      previousLabel={
        <li>
          <Icon iconName="arrow-left" size={14} />
          Previous
        </li>
      }
      nextLabel={
        <li>
          Next
          <Icon iconName="arrow-right" size={14} />
        </li>
      }
    />
  );
};

export default Pagination;

const CustomPaginate = styled(ReactPaginate)<ReactPaginateProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  li {
    display: flex;
    align-items: center;
    color: ${(p) => p.theme.colors.grayScale.gray500};
    font-weight: 600;
    padding: 12px;
    &.selected {
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
    &.previous {
      .icon-arrow-left {
        margin-right: 12px;
      }
    }
    &.next {
      .icon-arrow-right {
        margin-left: 12px;
      }
    }
    &.disabled {
      opacity: 0.4;
      pointer-events: none;
    }
  }
`;
