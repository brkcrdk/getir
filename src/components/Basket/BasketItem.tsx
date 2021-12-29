import styled from "styled-components";
const BasketItem = () => {
  return (
    <BasketItemWrapper>
      <ItemInfo>
        <span className="product-name">Example Product</span>
        <span className="product-price">₺14,99</span>
      </ItemInfo>
      <AmountControllers>
        <button>-</button>
        <span className="amount">1</span>
        <button>+</button>
      </AmountControllers>
    </BasketItemWrapper>
  );
};

export default BasketItem;

const BasketItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(p) => p.theme.colors.blackScale.black50};
  padding: 16px 8px;
  font-size: 14px;
  .product-name {
    color: ${(p) => p.theme.colors.grayScale.gray700};
    margin-bottom: 4px;
  }
  .product-price {
    color: ${(p) => p.theme.colors.main};
    font-weight: 600;
  }
`;

const ItemInfo = styled.div`
  display: grid;
`;

const AmountControllers = styled.div`
  display: flex;
  align-items: center;
  .amount {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    font-weight: 700;
    background: ${(p) => p.theme.colors.main};
    color: #fff;
  }
`;
