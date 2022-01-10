import styled from "styled-components";
import { useSelector } from "react-redux";
import { ProductType } from "types";
import { device } from "theme";
import { NothingFound } from "components";
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
  const renderLoading = [...Array(16).fill(0)].map((_, i: number) => (
    <CardSkeleton key={`product-skeleton-${i}`} />
  ));

  const renderProducts = products.length ? (
    products.map((product: ProductType, index) => (
      <ProductCard
        imageUrl={`https://picsum.photos/300/300?random=${index}`}
        key={`product-${index}`}
        price={product.price}
        name={product.name}
      />
    ))
  ) : (
    <NothingFound />
  );

  return (
    <ProductListWrapper>
      {loading ? renderLoading : renderProducts}
    </ProductListWrapper>
  );
};
export default ProductList;

const ProductListWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 32px;
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(124px, 1fr));
  background: #fff;
  border-radius: 2px;
  padding: 20px;
  box-shadow: ${(p) => p.theme.colors.boxShadows.filterContainer};

  @media ${device.phone} {
    gap: 12px;
  }
`;
