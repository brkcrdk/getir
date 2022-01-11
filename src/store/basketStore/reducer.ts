import { ProductType, BasketTypes, BasketType, actionTypes } from "types";

const { ADD_TO_BASKET, REMOVE_FROM_BASKET, INCREMENT_COUNT, DECREMENT_COUNT } =
  actionTypes.basketStore;

const initialState = {
  basket: [],
};

interface ActionType {
  type: string;
  payload: ProductType;
}

const isSelected = (basket: BasketType[], product: ProductType) => {
  return basket.some((basketItem) => basketItem.item.slug === product.slug);
};

export const basketReducer = (
  state: BasketTypes = initialState,
  action: ActionType
) => {
  switch (action.type) {
    // Add To Basket
    case ADD_TO_BASKET: {
      if (!isSelected(state.basket, action.payload)) {
        const newBasketItem = { count: 1, item: action.payload };
        return {
          basket: state.basket.concat(newBasketItem),
        };
      }
      return state;
    }
    // Remove from basket
    case REMOVE_FROM_BASKET: {
      if (isSelected(state.basket, action.payload)) {
        const filteredState = state.basket.filter(
          (basketItem) => basketItem.item.slug !== action.payload.slug
        );
        return { basket: filteredState };
      }
      return state;
    }
    // Increment items count
    case INCREMENT_COUNT: {
      const updatedState = state.basket.map((basketItem) => {
        if (basketItem.item.slug === action.payload.slug) {
          return { ...basketItem, count: basketItem.count + 1 };
        }
        return basketItem;
      });
      return { basket: updatedState };
    }

    // Decrement items count
    case DECREMENT_COUNT: {
      const selectedItem = state.basket.find(
        (basketItem) => basketItem.item.slug === action.payload.slug
      );
      // If selected items count is eq. to one remove that item
      // Else decrease
      if (selectedItem?.count === 1) {
        const filteredState = state.basket.filter(
          (basketItem) => basketItem.item.slug !== action.payload.slug
        );
        return { basket: filteredState };
      } else {
        const updatedState = state.basket.map((basketItem) => {
          if (basketItem.item.slug === action.payload.slug) {
            return { ...basketItem, count: basketItem.count - 1 };
          }
          return basketItem;
        });
        return { basket: updatedState };
      }
    }
    default:
      return state;
  }
};
