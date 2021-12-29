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
  width: 100%;
  max-width: 296px;
`;
