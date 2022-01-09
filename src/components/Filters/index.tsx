import styled from "styled-components";
import Sorting from "./Sorting";
import Brands from "./Brands";
import Tags from "./Tags";

const Filters = () => {
  return (
    <FiltersWrapper>
      <Sorting />
      <Brands />
      <Tags />
    </FiltersWrapper>
  );
};

export default Filters;

const FiltersWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 296px;
  display: grid;
  row-gap: 16px;
  transition: all 0.5s ease-in-out;
`;
