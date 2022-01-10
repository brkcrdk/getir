import { useDispatch, useSelector } from "react-redux";
import { actionTypes, StoreTypes } from "types";

type filters = "_page" | "_limit" | "_sort" | "manufacturer_like" | "tags_like";

const useChangeFilter = () => {
  const dispatch = useDispatch();
  const { filters } = useSelector((s: StoreTypes) => s.productStore);

  const handleChangeFilter = (
    filterType: filters,
    filterData: string | string[]
  ) => {
    dispatch({
      type: actionTypes.productStore.UPDATE_PRODUCTS_REQUESTED,
      payload: {
        filters: {
          ...filters,
          [filterType]: filterData,
        },
      },
    });
  };

  return { handleChangeFilter };
};

export default useChangeFilter;
