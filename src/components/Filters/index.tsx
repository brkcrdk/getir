import styled from "styled-components";
import Sorting from "./Sorting";

const Filters = () => {
  return (
    <FiltersWrapper>
      <Sorting />
    </FiltersWrapper>
  );
};

export default Filters;

const FiltersWrapper = styled.div`
  border: 1px solid yellow;
  width: 100%;
`;
