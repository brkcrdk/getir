import { useDispatch, useSelector } from "react-redux";
import { actionTypes, StoreTypes } from "types";

type filters =
  | "_page"
  | "_limit"
  | "_sort"
  | "_order"
  | "manufacturer_like"
  | "tags_like"
  | "itemType";

const useChangeFilter = () => {
  const dispatch = useDispatch();
  const { filters } = useSelector((s: StoreTypes) => s.productStore);

  const handleChangeFilter = (
    filterType: filters,
    filterData: string | string[] | number
  ) => {
    dispatch({
      type: actionTypes.productStore.UPDATE_PRODUCTS_REQUESTED,
      payload: {
        filters: {
          ...filters,
          // Bu yapı yerine obje şeklinde gelmeli
          // {...newFilters} gibi böylece order tarafındaki hata gider
          // ayrıca daha mantıklı bir yapı oluşur.
          [filterType]: filterData,
        },
      },
    });
  };

  return { handleChangeFilter };
};

export default useChangeFilter;
