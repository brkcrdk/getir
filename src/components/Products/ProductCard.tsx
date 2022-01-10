import { FC } from "react";
import styled from "styled-components";

interface ProductCardProps {
  imageUrl: string;
  price: number;
  name: string;
}

const ProductCard: FC<ProductCardProps> = ({ imageUrl, price, name }) => {
  return (
    <ProductCardWrapper>
      <ImageContainer>
        <img src={imageUrl} alt="product-img" />
      </ImageContainer>
      <ProductInfo>
        <span>₺{price}</span>
        <h4 title={name}>{name}</h4>
        <button>Add</button>
      </ProductInfo>
    </ProductCardWrapper>
  );
};

export default ProductCard;

const ProductCardWrapper = styled.article``;

const ImageContainer = styled.div`
  padding: 16px;
  border: 1.2px solid ${(p) => p.theme.colors.imageBorder};
  border-radius: 12px;
  margin-bottom: 8px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const ProductInfo = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 96px;
  span {
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: ${(p) => p.theme.colors.main};
  }
  h4 {
    font-weight: 600;
    color: ${(p) => p.theme.colors.grayScale.gray700};
    font-size: 14px;
  }
  button {
    text-align: center;
    font-weight: 600;
    color: #fff;
    background: ${(p) => p.theme.colors.main};
    font-size: 12px;
    line-height: 20px;
    width: 100%;
    border-radius: 2px;
    padding: 1px 0;
    margin-top: 8px;
  }
`;
