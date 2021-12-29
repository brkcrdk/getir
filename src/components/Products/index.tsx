import styled from "styled-components";
import { Pagination } from "components";
import ProductTypes from "./ProductTypes";
import ProductList from "./ProductList";

const Products = () => {
  return (
    <ProductsWrapper>
      <h3>Products</h3>
      <ProductTypes />
      <ProductList />
      <Pagination activePage={2} pageCount={12} />
    </ProductsWrapper>
  );
};
export default Products;

const ProductsWrapper = styled.div`
  width: 100%;
  margin: 0 16px;
  h3 {
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
  }
`;
