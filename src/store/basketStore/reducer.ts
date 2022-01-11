import { ProductType, BasketTypes, actionTypes } from "types";

const initialState = {
  basket: [],
};

interface ActionType {
  type: string;
  payload: ProductType;
}

const isSelected = (state: BasketTypes, action: ActionType) => {
  return state.basket.find(
    (basketItem) => basketItem.item.slug === action.payload.slug
  );
};

export const basketReducer = (
  state: BasketTypes = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case actionTypes.basketStore.ADD_TO_BASKET:
      if (!isSelected(state, action)) {
        const newBasketItem = { count: 1, item: action.payload };
        return {
          basket: state.basket.concat(newBasketItem),
        };
      }
      return state;
    case actionTypes.basketStore.REMOVE_FROM_BASKET:
      if (isSelected(state, action)) {
        const updatedState = state.basket.filter(
          (basketItem) => basketItem.item.slug !== action.payload.slug
        );
        return { basket: updatedState };
      }
      return state;

    default:
      return state;
  }
};
