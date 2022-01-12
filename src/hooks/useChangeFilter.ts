import { useDispatch, useSelector } from "react-redux";
import { actionTypes, StoreTypes, FilterTypes } from "types";

const useChangeFilter = () => {
  const dispatch = useDispatch();
  const { filters } = useSelector((s: StoreTypes) => s.productStore);

  const handleChangeFilter = (newFilters: FilterTypes) => {
    dispatch({
      type: actionTypes.productStore.UPDATE_PRODUCTS_REQUESTED,
      payload: {
        filters: {
          ...filters,
          ...newFilters,
        },
      },
    });
  };

  return { handleChangeFilter };
};

export default useChangeFilter;
