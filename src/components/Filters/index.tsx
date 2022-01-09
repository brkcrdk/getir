import { useState } from "react";
import styled from "styled-components";
import Sorting from "./Sorting";
import Brands from "./Brands";
import Tags from "./Tags";
import { device } from "theme";

const Filters = () => {
  const [isHidden, setHidden] = useState(false);

  return (
    <FiltersWrapper isHidden={isHidden}>
      <Sorting />
      <Brands />
      <Tags />
      <button className="test" onClick={() => setHidden(!isHidden)}>
        X
      </button>
    </FiltersWrapper>
  );
};

export default Filters;

interface StyleProps {
  isHidden: boolean;
}

const FiltersWrapper = styled.div<StyleProps>`
  width: 100%;
  height: 100%;
  max-width: 296px;
  display: grid;
  row-gap: 16px;
  transition: all 0.5s ease-in-out;
  @media ${device.desktop} {
    position: fixed;
    left: ${(p) => (p.isHidden ? "-300px" : 0)};
    top: 76px;
    background: #fff;
    .test {
      position: absolute;
      top: 0;
      right: -48px;
      padding: 20px;
      background: #fff;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
`;
