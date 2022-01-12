import styled from "styled-components";
import { useSelector } from "react-redux";
import { Pagination } from "components";
import { StoreTypes } from "types";
import { useChangeFilter } from "hooks";
import ProductTypes from "./ProductTypes";
import ProductList from "./ProductList";

const Products = () => {
  const { totalPages } = useSelector((s: StoreTypes) => s.productStore);
  const { handleChangeFilter } = useChangeFilter();

  return (
    <ProductsWrapper>
      <h3>Products</h3>
      <ProductTypes />
      <ProductList />
      {totalPages && (
        <Pagination
          pageCount={totalPages}
          onPageChange={(e: { selected: number }) => {
            handleChangeFilter({ _page: e.selected + 1 });
          }}
        />
      )}
    </ProductsWrapper>
  );
};
export default Products;

const ProductsWrapper = styled.div`
  width: 100%;
  margin: 0 16px;
  margin-bottom: 100px;
  h3 {
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
  }
`;
