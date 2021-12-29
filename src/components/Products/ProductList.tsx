import styled from "styled-components";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <ProductListWrapper>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </ProductListWrapper>
  );
};
export default ProductList;

const ProductListWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 32px;
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(4, 1fr);
  background: #fff;
  border-radius: 2px;
  padding: 20px;
  box-shadow: ${(p) => p.theme.colors.boxShadows.filterContainer};
`;
