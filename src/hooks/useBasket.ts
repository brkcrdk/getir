import { useDispatch, useSelector } from "react-redux";

import { ProductType, actionTypes, StoreTypes } from "types";

const useBasket = () => {
  const dispatch = useDispatch();
  const { basket } = useSelector((s: StoreTypes) => s.basketStore);

  const isInBasket = (product: ProductType) => {
    return basket.some((basketItem) => basketItem.item.slug === product.slug);
  };

  const addToBasket = (product: ProductType) => {
    dispatch({
      type: actionTypes.basketStore.ADD_TO_BASKET,
      payload: product,
    });
  };
  const removeFromBasket = (product: ProductType) => {
    dispatch({
      type: actionTypes.basketStore.REMOVE_FROM_BASKET,
      payload: product,
    });
  };

  const updateCount = (
    product: ProductType,
    updateType: "increment" | "decrement"
  ) => {
    dispatch({
      type: actionTypes.basketStore.REMOVE_FROM_BASKET,
      payload: {
        product,
        updateType,
      },
    });
  };

  return { addToBasket, removeFromBasket, updateCount, isInBasket, basket };
};

export default useBasket;
