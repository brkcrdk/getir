import styled from "styled-components";
import { useSelector } from "react-redux";
import { ProductType, StoreTypes } from "types";
import { device } from "theme";
import { useBasket } from "hooks";
import { NothingFound } from "components";
import ProductCard from "./ProductCard";
import CardSkeleton from "./CardSkeleton";

const ProductList = () => {
  const { products, loading } = useSelector((s: StoreTypes) => s.productStore);
  const { addToBasket, removeFromBasket, isInBasket, updateCount, basket } =
    useBasket();
  const renderLoading = [...Array(16).fill(0)].map((_, i: number) => (
    <CardSkeleton key={`product-skeleton-${i}`} />
  ));

  console.log(basket);

  const handleOnClick = (product: ProductType) => {
    if (isInBasket(product)) {
      removeFromBasket(product);
    } else {
      addToBasket(product);
    }
  };

  const renderProducts = products.length ? (
    products.map((product: ProductType, index) => (
      <ProductCard
        imageUrl={`https://picsum.photos/300/300?random=${index}`}
        key={`product-${index}`}
        price={product.price}
        name={product.name}
        onClick={() => handleOnClick(product)}
        inBasket={isInBasket(product)}
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
