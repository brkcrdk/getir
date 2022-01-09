import styled from "styled-components";
import Sorting from "./Sorting";
import Brands from "./Brands";
import Tags from "./Tags";
import { device } from "theme";

const Filters = ({ sidebarFilter = false }) => {
  return (
    <FiltersWrapper sidebarFilter={sidebarFilter}>
      <Sorting />
      <Brands />
      <Tags />
    </FiltersWrapper>
  );
};

export default Filters;

interface StyleProps {
  sidebarFilter?: boolean;
}

const FiltersWrapper = styled.div<StyleProps>`
  width: 100%;
  height: 100%;
  max-width: 296px;
  display: grid;
  row-gap: 16px;
  transition: all 0.5s ease-in-out;
  @media ${device.desktop} {
    display: ${(p) => !p.sidebarFilter && "none"};
    padding: 12px 6px;
  }
`;
