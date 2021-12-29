import styled from "styled-components";
import Sorting from "./Sorting";
import Brands from "./Brands";

const Filters = () => {
  return (
    <FiltersWrapper>
      <Sorting />
      <Brands />
    </FiltersWrapper>
  );
};

export default Filters;

const FiltersWrapper = styled.div`
  width: 100%;
  max-width: 296px;
  display: grid;
  row-gap: 16px;
`;
