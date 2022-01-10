import { FC } from "react";
import styled from "styled-components";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import { useMediaQuery } from "usehooks-ts";

import { Icon } from "components";
import { device } from "theme";

const Pagination: FC<ReactPaginateProps> = ({ pageCount = 2, ...props }) => {
  const isTablet = useMediaQuery(device.tablet);

  return (
    <CustomPaginate
      pageCount={pageCount}
      pageRangeDisplayed={isTablet ? 0 : 2}
      marginPagesDisplayed={isTablet ? 0 : 2}
      previousLabel={
        <>
          <Icon iconName="arrow-left" size={14} />
          Previous
        </>
      }
      nextLabel={
        <>
          Next
          <Icon iconName="arrow-right" size={14} />
        </>
      }
      {...props}
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
