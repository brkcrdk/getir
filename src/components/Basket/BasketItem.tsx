import { FC } from "react";
import styled from "styled-components";
import { Icon } from "components";
import theme, { lineClamp } from "theme";

interface BasketItemProps {
  price: number;
  productName: string;
  count: number;
  incrementAmount: () => void;
  decrementAmount: () => void;
}

const BasketItem: FC<BasketItemProps> = ({
  price,
  productName,
  count,
  incrementAmount,
  decrementAmount,
}) => {
  return (
    <BasketItemWrapper>
      <ItemInfo>
        <span title={productName} className="product-name">
          {productName}
        </span>
        <span className="product-price">₺{price}</span>
      </ItemInfo>
      <AmountControllers>
        <button title="Decrement Amount of Item" onClick={decrementAmount}>
          <Icon iconName="minus" size={14} color={theme.colors.main} />
        </button>
        <span title="Amount of Items" className="amount">
          {count}
        </span>
        <button title="Increment Amount of Item" onClick={incrementAmount}>
          <Icon iconName="plus" size={14} color={theme.colors.main} />
        </button>
      </AmountControllers>
    </BasketItemWrapper>
  );
};

export default BasketItem;

const BasketItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  border-bottom: 1px solid ${(p) => p.theme.colors.blackScale.black50};
  padding: 16px 8px;
  font-size: 14px;
  .product-name {
    color: ${(p) => p.theme.colors.grayScale.gray700};
    margin-bottom: 4px;
    ${lineClamp(1)}
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
    margin: 0 10px;
  }
`;
