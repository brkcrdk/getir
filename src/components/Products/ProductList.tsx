import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { ProductType, actionTypes, StoreTypes } from "types";
import { device } from "theme";
import { NothingFound } from "components";
import ProductCard from "./ProductCard";
import CardSkeleton from "./CardSkeleton";

const ProductList = () => {
  const { products, loading } = useSelector((s: StoreTypes) => s.productStore);
  const { basket } = useSelector((s: StoreTypes) => s.basketStore);

  const renderLoading = [...Array(16).fill(0)].map((_, i: number) => (
    <CardSkeleton key={`product-skeleton-${i}`} />
  ));

  const dispatch = useDispatch();

  const handleAdd = (selectedProduct: ProductType) => {
    dispatch({
      type: actionTypes.basketStore.ADD_TO_BASKET,
      payload: selectedProduct,
    });
  };
  console.log(basket);

  const renderProducts = products.length ? (
    products.map((product: ProductType, index) => (
      <ProductCard
        imageUrl={`https://picsum.photos/300/300?random=${index}`}
        key={`product-${index}`}
        price={product.price}
        name={product.name}
        onClick={() => handleAdd(product)}
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
