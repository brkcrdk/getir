import { useDispatch, useSelector } from "react-redux";

import { ProductType, actionTypes, StoreTypes } from "types";

const useBasket = () => {
  const dispatch = useDispatch();
  const { basket } = useSelector((s: StoreTypes) => s.basketStore);
  const {
    ADD_TO_BASKET,
    REMOVE_FROM_BASKET,
    INCREMENT_COUNT,
    DECREMENT_COUNT,
  } = actionTypes.basketStore;

  const isInBasket = (product: ProductType) => {
    return basket.some((basketItem) => basketItem.item.slug === product.slug);
  };

  const addToBasket = (product: ProductType) => {
    dispatch({
      type: ADD_TO_BASKET,
      payload: product,
    });
  };
  const removeFromBasket = (product: ProductType) => {
    dispatch({
      type: REMOVE_FROM_BASKET,
      payload: product,
    });
  };

  const updateCount = (
    product: ProductType,
    updateType: "increment" | "decrement"
  ) => {
    dispatch({
      type: updateType === "increment" ? INCREMENT_COUNT : DECREMENT_COUNT,
      payload: product,
    });
  };

  return { addToBasket, removeFromBasket, updateCount, isInBasket, basket };
};

export default useBasket;
