import styled from "styled-components";

const ProductCard = () => {
  return (
    <ProductCardWrapper>
      <ImageContainer>
        <img
          src="https://i.picsum.photos/id/114/200/200.jpg?hmac=quI2SDil5gvhyJiPY4KNxdaMtGBybPSvAS7R02lF1vo"
          alt="product-img"
        />
      </ImageContainer>
      <span>₺14.99</span>
      <h4>Georgeous Office Mug</h4>
      <button>Add</button>
    </ProductCardWrapper>
  );
};

export default ProductCard;

const ProductCardWrapper = styled.article`
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
