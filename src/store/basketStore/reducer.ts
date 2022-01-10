import { ProductType, BasketTypes, actionTypes } from "types";

const initialState = {
  basket: [],
};

interface ActionType {
  type: string;
  payload: ProductType;
}

export const basketReducer = (
  state: BasketTypes = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case actionTypes.basketStore.ADD_TO_BASKET:
      const alreadyInBasket = state.basket.find(
        (basketItem) => basketItem.item.slug === action.payload.slug
      );

      if (alreadyInBasket) {
        const updateState = state.basket.map((basketItem) => {
          if (basketItem.item.slug === action.payload.slug) {
            return { ...basketItem, count: basketItem.count + 1 };
          }
          return basketItem;
        });
        return { ...state, basket: updateState };
      }
      return {
        ...state,
        basket: state.basket.concat({ count: 1, item: action.payload }),
      };
    default:
      return state;
  }
};
