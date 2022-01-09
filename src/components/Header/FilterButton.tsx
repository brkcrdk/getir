import styled from "styled-components";
import { useMediaQuery } from "usehooks-ts";
import { useDispatch, useSelector } from "react-redux";
import { device } from "theme";
import { Icon, Filters } from "components";
import { SidebarTypes } from "types";

interface StateProps {
  sidebarStore: SidebarTypes;
}

const FilterButton = () => {
  const { isOpen } = useSelector((s: StateProps) => s.sidebarStore);
  const isDesktop = useMediaQuery(device.desktop);

  const dispatch = useDispatch();

  const openFilter = () => {
    dispatch({
      type: "OPEN_SIDEBAR",
      payload: {
        sidebarContent: <Filters sidebarFilter />,
      },
    });
  };

  return isDesktop ? (
    <FilterButtonWrapper
      title="Filter Products"
      onClick={openFilter}
      isSidebarOpen={isOpen}
    >
      <Icon iconName="filter" color="#fff" size={24} />
    </FilterButtonWrapper>
  ) : (
    <span />
  );
};

export default FilterButton;

interface StyleProps {
  isSidebarOpen: boolean;
}

const FilterButtonWrapper = styled.button<StyleProps>`
  display: none;
  pointer-events: none;
  @media ${device.desktop} {
    display: block;
    pointer-events: ${(p) => (p.isSidebarOpen ? "none" : "all")};
  }
`;
