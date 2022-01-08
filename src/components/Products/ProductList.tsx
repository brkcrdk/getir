import styled from "styled-components";
import { useSelector } from "react-redux";
import { ProductType } from "types";
import ProductCard from "./ProductCard";
import CardSkeleton from "./CardSkeleton";

interface StateType {
  productStore: {
    loading: boolean;
    products: ProductType[];
  };
}

const ProductList = () => {
  const { products, loading } = useSelector((s: StateType) => s.productStore);
  const renderLoading = [...Array(16).fill(0)].map(() => <CardSkeleton />);

  return (
    <ProductListWrapper>
      {loading
        ? renderLoading
        : products.map((product: ProductType, index) => (
            <ProductCard key={`product-${index}`} />
          ))}
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
